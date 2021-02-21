<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" 
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <html>
            <body>
                <h1>USER DATA</h1>
                <table border="2" align="center">
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Contact</th>
                        <th>Email</th>
                    </tr>
                    <xsl:for-each select="userInfo/user">
                    <tr>
                        <td><xsl:value-of select="name" /> </td>
                        <td><xsl:value-of select="age" /> </td>
                        <td><xsl:value-of select="gender" /> </td>
                        <td><xsl:value-of select="contact" /> </td>
                        <td><xsl:value-of select="email" /> </td>
                    </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>

    </xsl:template>
</xsl:stylesheet>