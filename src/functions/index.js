const functions = require("firebase-functions");
const fetch = require("node-fetch");

exports.sendLeadToCRM = functions.https.onRequest(async (req, res) => {
  try {
    const { name, mobile, email, city, model } = req.body;

    const crmResponse = await fetch("CRM_API_ENDPOINT_HERE", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${functions.config().crm.key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        phone: mobile,
        email: email,
        city: city,
        model: model,
        source: "Website",
      }),
    });

    if (!crmResponse.ok) {
      return res.status(500).json({ message: "CRM API failed" });
    }

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
});
