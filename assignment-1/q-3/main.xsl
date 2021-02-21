<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <html>
            <body>
                <h1 align="center" font-type="bold">User Detail</h1>
                <table align="center" border="3">
                    <tr bgcolor="#9acd32">
                        <th>name</th>
                        <th>roll_no</th>
                        <th>marks</th>
                        <th>branch</th>
                    </tr>
                    <xsl:for-each select="user_info/user">
                        <tr>
                            <td>
                                <xsl:value-of select="name"/>
                            </td>
                            <td>
                                <xsl:value-of select="roll_no"/>
                            </td>
                            <td>
                                <xsl:value-of select="marks"/>
                            </td>
                            <td>
                                <xsl:value-of select="branch"/>
                            </td>
                        </tr>
                    </xsl:for-each>

                </table>

            </body>
        </html>

    </xsl:template>
</xsl:stylesheet>