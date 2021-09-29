<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" 
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
    <html>
        <body>
            <h1 align="center">Invoice</h1>

            <p align="center">Invoice Date - 21/02/2021</p>

                <table border="2" align="center">
                    <tr>
                        <th>Sr No.</th>
                        <th>Item Name</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                    <xsl:for-each select="Invoice/product">
                    <tr>
                        <td><xsl:value-of select="srno" /></td>
                        <td><xsl:value-of select="p_name" /> </td>
                        <td><xsl:value-of select="unit_price" /> </td>
                        <td><xsl:value-of select="quantity" /> </td>
                        <td><xsl:value-of select="total" /> </td>
                    </tr>
                    
                    </xsl:for-each>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Grand Total</td>
                        <td>3675</td>
                    </tr>
                </table>
        </body>
    </html>
</xsl:template>
</xsl:stylesheet>