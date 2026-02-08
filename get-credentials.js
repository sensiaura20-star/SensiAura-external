// netlify/functions/get-credentials.js
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

  try {
    // Obtener el store de Netlify Blobs
    const store = getStore("sensiaura");
    
    // Intentar obtener las credenciales guardadas
    let credentials = await store.get("credentials", { type: "json" });
    
    // Si no existen, usar credenciales por defecto
    if (!credentials) {
      credentials = {
        'SENSIAURA.2026-HS-3DSS': {
          password: 'VIP1SS.SENSIAURA',
          user: 'VIP User',
          expires: '2026-12-31'
        }
      };
      
      // Guardar credenciales por defecto
      await store.setJSON("credentials", credentials);
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        credentials: credentials,
        timestamp: new Date().toISOString()
      })
    };

  } catch (error) {
    console.error('Error getting credentials:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        error: 'Error retrieving credentials',
        message: error.message
      })
    };
  }
};
