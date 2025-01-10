export const uploadVideoToCloudinary = async (file: Blob) => {
  const UPLOAD_PRESET = import.meta.env.CLOUDINARY_UPLOAD_PRESET!;
  const CLOUD_NAME = import.meta.env.CLOUDINARY_CLOUD_NAME!;
  const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

  console.log("UPLOAD_URL:", UPLOAD_URL)
  try {
    const formData = new FormData();
    formData.append("upload_preset", UPLOAD_PRESET);
    formData.append("file", file);
    const res = await fetch(UPLOAD_URL, {
      method: "POST",
      body: formData,
    });
    console.log("res:", res);

    const result = await res.json();
    console.log("result:", result);

    // Save the `result.secure_url` to your database if needed
    return result;
  } catch (error) {
    console.error("Error uploading video:", error);
  }
};
