<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" 
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
    <html>
        <body>
                <xsl:for-each select="catalog/book">
                <ol>
                    <li>
                        <xsl:value-of select="title"/>
                    </li>
                </ol>
                <li>
                    <xsl:value-of select="author"/>
                </li>
                <li>
                    <xsl:value-of select="cost"/>
                </li>
                <li>
                    <xsl:value-of select="year"/>
                </li>
                <li>
                    <xsl:value-of select="@genre"/>
                </li>
            </xsl:for-each>
        </body>
    </html>
</xsl:template>
</xsl:stylesheet>