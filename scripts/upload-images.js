const cloudinary = require('cloudinary').v2;
const path = require('path');
const fs = require('fs');

// 配置 Cloudinary
cloudinary.config({
  cloud_name: 'dmclw72yc',
  api_key: '935725936791189',
  api_secret: 'your-api-secret' // 请替换为你的 API Secret
});

// 图片目录
const imageDir = path.join(__dirname, '../public/project_images');

// 上传函数
async function uploadImage(imagePath) {
  try {
    const fileName = path.basename(imagePath);
    console.log(`Uploading ${fileName}...`);
    
    const result = await cloudinary.uploader.upload(imagePath, {
      folder: 'portfolio-site',
      public_id: fileName.split('.')[0], // 移除扩展名
      resource_type: 'auto',
      overwrite: true // 如果文件已存在则覆盖
    });
    
    console.log(`Successfully uploaded ${fileName}:`, result.secure_url);
    return result;
  } catch (error) {
    console.error(`Failed to upload ${imagePath}:`, error);
    throw error;
  }
}

// 读取并上传所有图片
async function uploadAllImages() {
  try {
    const files = fs.readdirSync(imageDir);
    console.log('Found files:', files);
    
    for (const file of files) {
      if (file.match(/\.(jpg|jpeg|png|gif)$/i)) {
        const imagePath = path.join(imageDir, file);
        await uploadImage(imagePath);
      }
    }
    
    console.log('All images uploaded successfully!');
  } catch (error) {
    console.error('Error during upload:', error);
  }
}

// 执行上传
uploadAllImages(); 