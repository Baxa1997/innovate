export const sendContactForm = async (data) =>
  fetch("/api/send-email", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  }).then((res) => {
    console.log("res", res)
    if (!res.ok) throw new Error("Failed to send message");
    return res.json();
  }).catch((err) => {
    console.log("err", err)
  })