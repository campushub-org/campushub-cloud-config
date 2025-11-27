const puppeteer = require('puppeteer');

(async () => {
  // 1. Lancer le navigateur
  const browser = await puppeteer.launch({
    headless: true, // chrome sans interface
  });

  const page = await browser.newPage();

  // 2. Ouvrir la page locale (ou distante)
  await page.goto("http://localhost:3000", {
    waitUntil: "networkidle0"  
    // Attend que toutes les requêtes réseau soient terminées
  });

  // 3. Générer le PDF
  await page.pdf({
    path: "site.pdf",
    format: "A4",
    printBackground: true, // Garde les couleurs, background CSS
    margin: {
      top: "1cm",
      bottom: "1cm",
      left: "1cm",
      right: "1cm"
    }
  });

  // 4. Fermer le navigateur
  await browser.close();

  console.log("PDF généré : site.pdf");
})();
