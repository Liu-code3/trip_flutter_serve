import crypto from 'crypto';
/**
 * 生成类似于JWT的token字符串
 * @param {Object} payload - 需要编码的负载数据
 * @param {string} secret - 用于签名的密钥
 * @returns {string} - 生成的token字符串
 */
export function generateToken(payload, secret) {
  // 编码头部
  const header = {
      alg: 'HS256',
      typ: 'JWT'
  };
  const encodedHeader = Buffer.from(JSON.stringify(header)).toString('base64').replace(/=/g, '');
  
  // 编码负载
  const encodedPayload = Buffer.from(JSON.stringify(payload)).toString('base64').replace(/=/g, '');
  
  // 生成签名
  const signature = crypto.createHmac('sha256', secret)
      .update(`${encodedHeader}.${encodedPayload}`)
      .digest('base64')
      .replace(/=/g, '');
  
  // 返回完整的token字符串
  return `${encodedHeader}.${encodedPayload}.${signature}`;
}