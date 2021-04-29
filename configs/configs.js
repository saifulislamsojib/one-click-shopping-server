require('dotenv').config();

module.exports = {
    type: "service_account",
    project_id: process.env.PROJECT_ID,
    private_key_id: process.env.PRIVATE_KEY_ID,
    private_key: `-----BEGIN PRIVATE KEY-----\n${process.env.PRIVATE_KEY}\nuT5jbYuku0DBZl0hUPSsvAdH8hs3yqYd8KgOFOyPtDdfeBvEObW7Evh+btUhK4Kg\njQW+5bgUptE32rJByhVOgPUtyIV8WMon11bovusj0As+Fkm2eYPYB7sZzVPj4lzC\nKe8LPr+Uoj62qEHerevspAVUTSWT9AErXe+C7ZoFJUT29d05ADKnje66a5YqIjiZ\n8AYLA1iaEEybmhVlcmsX9d/ZTZAtg4LgUL1nRczOydyhrtyOgZwhdK90+XyqXS2X\n9omJetxIqldAnnTcx4PWWtk77xU27+FvDLP+6oFPXYclDmcI/JvJ9FXBgT77nlD7\nyva2eKhHAgMBAAECggEACxhPGSS440I0HFAAituB1BZQNwTEq6NrwDuDS28zyymN\nZ8pm+P19zt+BR58MchYC69/eksOpMKwHjoyCHku7vEm2zdPFy+nVjHmzU9mG8yxU\nBI4tKhhKLCruUcqfyJC1HcIqBSaMAnP/rRxOKsybIKj4qkVpF8y6xSEnD3oDIb99\nOXcDyA/0+LnN2BrKNwToCmo5F7q51esUbhBZtb1WRr08XghqRrwo4kjCX/HBkgL8\n6AmOoakAEQOqJWco6Y0rXoDCAluRmJrTdVO0MJgCpRP2CwuPhE9nIrvUzeXXzA3P\nW4n/d4AVt22WhdBebR4N9rJb8f8bJ3D+t5N8glHlgQKBgQDELHulyqUQddApq2gT\n1jNy8grcxiX42eDrQI/uSkscDPy9zRoYnhEZpEcwO1/V8vS3STQoqv8EOGcpoojG\nL3f6NE0x2FuzzVn9/mmFqKSjlaiA+Qrvt4tVFEOuN9f0Cu+qWb19aukqss9I6YIJ\nA1xiECWSHmh6eTei68C0aNi6ZwKBgQC8y1NM7MKGeBEHOzjpli/qoYgwUF80wwQp\niM6iMJ8s9gcSxBG/fwexFeDFye4Oyvs9h+jL/S/GWHZNEnAHdkKH91W2tEWRO7r0\n6ixDVAq5ND/ruRR1kN14tYLeUkszaXLZZU93suUO63BLtb9KSQodkkP79AeyWTzn\nsTBAlM+3IQKBgQCg+aeVCk6czTA9oUvMS074malUNLzgEVnBcb8p2Ij9waJ71Rv+\n62Y41lccOvyPQciRxl4oqPiObAIrZhY6GqWnCNf3eQT27CFWjTfl19cR7TLScooI\n32JUNEa9ZVGuDnNQJEeb7OjcgtIZkJOF9d4PEhTibFVreqCu7im5YPfHLQKBgQCe\n7sASeyILV5pmLwnrQr7V0+Q1YAO2BBJF8OCbEzl8/STZPGwAfKz5/AP8HdElbOVy\nWC63Q05ruF7m5QWgkoLRuXrT0xDZgaISuexHRcG9Reolw+ogSrLXAl7IUBj0j+na\nb3olt1kzZSpk4fzGSZSVbmODAF1WW9904OpRA7WVYQKBgBzENfH6OTfxUcebp4h5\njmVZ6QJ/5npadsUdoteZ84ww9IeLMP87HBQJlobhW2kfwCEYMccJOig4on7pySnc\nqCt0I1c3PiixdifKAxJzH+wY2uZrU2UhsV1/Ee53me3FwE1e+3kUkNFA+yNwN+oH\ncJYvCXXTbCkzL9RafWdL08Ur\n-----END PRIVATE KEY-----\n`,
    client_email: process.env.CLIENT_EMAIL,
    client_id: process.env.CLIENT_ID,
    auth_uri: process.env.AUTH_URI,
    token_uri: process.env.TOKEN_URI,
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: process.env.CLIENT_CERT_URL
};