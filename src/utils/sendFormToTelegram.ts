export async function sendFormToTelegram(message: string) {
  const botToken = process.env.NEXT_PUBLIC_BOT_TOKEN;
  const chatId = process.env.NEXT_PUBLIC_CHAT_ID;
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "HTML",
      }),
    });
    if (response.ok) {
    } else {
      throw new Error("Failed to submit form");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
  }
}

export async function sendFileToTelegram(file: File | Blob, caption?: string) {
  const botToken = process.env.NEXT_PUBLIC_BOT_TOKEN;
  const chatId = process.env.NEXT_PUBLIC_CHAT_ID;
  const url = `https://api.telegram.org/bot${botToken}/sendDocument`;

  const formData = new FormData();
  formData.append("chat_id", chatId!);
  formData.append("document", file);

  if (caption) {
    formData.append("caption", caption);
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to send file");
    }

    return response.json();
  } catch (error) {
    console.error("Error sending file:", error);
    throw error;
  }
}
