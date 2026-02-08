// netlify/functions/update-credentials.js
const { getStore } = require("@netlify/blobs");

exports.handler = async (event, context) => {
  // Configurar CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  // Manejar preflight request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  // Solo permitir POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({
        success: false,
        error: 'Method not allowed'
      })
    };
  }

  try {
    // Parsear el body
    const data = JSON.parse(event.body);
    
    // Validar admin key
    const ADMIN_KEY = process.env.ADMIN_MASTER_KEY || 'ADMIN.SENSIAURA.2026';
    
    if (data.adminKey !== ADMIN_KEY) {
      return {
        statusCode: 401,
        headers,
        body: JSON.stringify({
          success: false,
          error: 'Invalid admin key'
        })
      };
    }

    // Validar datos requeridos
    if (!data.key || !data.password || !data.user) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          error: 'Missing required fields: key, password, user'
        })
      };
    }

    // Crear nuevas credenciales
    const newCredentials = {};
    newCredentials[data.key.toUpperCase()] = {
      password: data.password,
      user: data.user,
      expires: data.expires || '2026-12-31',
      updatedAt: new Date().toISOString()
    };

    // Guardar en Netlify Blobs
    const store = getStore("sensiaura");
    await store.setJSON("credentials", newCredentials);

    // Log de auditoría
    const auditLog = {
      timestamp: new Date().toISOString(),
      action: 'UPDATE_CREDENTIALS',
      key: data.key.toUpperCase(),
      user: data.user
    };
    
    // Guardar log (opcional)
    const logs = await store.get("audit_logs", { type: "json" }) || [];
    logs.push(auditLog);
    await store.setJSON("audit_logs", logs.slice(-100)); // Mantener últimos 100 logs

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: 'Credentials updated successfully',
        credentials: newCredentials,
        timestamp: new Date().toISOString()
      })
    };

  } catch (error) {
    console.error('Error updating credentials:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        error: 'Error updating credentials',
        message: error.message
      })
    };
  }
};
