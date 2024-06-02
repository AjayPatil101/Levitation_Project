const puppeteer = require('puppeteer');

exports.generatePDF = async (products, user, date) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const content = `
    <h1>Invoice</h1>
    <p>User: ${user.name} (${user.email})</p>
    <p>Date: ${date}</p>
    <table border="1" style="width: 100%; border-collapse: collapse;">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Rate</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        ${products.map(product => `
          <tr>
            <td>${product.name}</td>
            <td>${product.qty}</td>
            <td>${product.rate}</td>
            <td>${product.qty * product.rate}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;

  await page.setContent(content);
  const pdf = await page.pdf({ format: 'A4' });
  await browser.close();

  return pdf;
};
