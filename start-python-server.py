#!/usr/bin/env python3
import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 3000
HOST = '0.0.0.0'

# Change to the directory where this script is located
os.chdir(os.path.dirname(os.path.abspath(__file__)))

# Create a simple HTML page
html_content = '''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MarketBrand.ai - Server Test</title>
    <style>
        body {
            font-family: 'Inter', sans-serif;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
            color: #ffffff;
            text-align: center;
            padding: 20px;
            margin: 0;
        }
        h1 {
            font-size: 4em;
            margin-bottom: 20px;
            background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-shadow: 0 0 30px rgba(99, 102, 241, 0.5);
        }
        p {
            font-size: 1.5em;
            color: #a1a1aa;
            max-width: 800px;
            line-height: 1.8;
            margin: 10px 0;
        }
        .status {
            background: rgba(34, 197, 94, 0.2);
            border: 1px solid #22c55e;
            border-radius: 10px;
            padding: 15px 30px;
            margin: 20px 0;
            color: #22c55e;
            font-weight: bold;
        }
        .cta {
            margin-top: 40px;
            padding: 20px 40px;
            background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
            color: white;
            border-radius: 15px;
            text-decoration: none;
            font-weight: bold;
            font-size: 1.2em;
            transition: all 0.3s ease;
            box-shadow: 0 10px 30px rgba(99, 102, 241, 0.4);
            display: inline-block;
        }
        .cta:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 40px rgba(99, 102, 241, 0.6);
        }
        .info {
            background: rgba(59, 130, 246, 0.2);
            border: 1px solid #3b82f6;
            border-radius: 10px;
            padding: 15px 30px;
            margin: 20px 0;
            color: #3b82f6;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <h1>MarketBrand.ai</h1>
    <div class="status">✓ Python Server is Running Successfully!</div>
    <div class="info">🌐 Server: Python HTTP Server</div>
    <p>This confirms that your server infrastructure is working correctly.</p>
    <p>Your beautiful website is now accessible!</p>
    <p>🎨 Ultra-modern design with glassmorphism effects</p>
    <p>✨ Premium animations and smooth interactions</p>
    <p>📱 Fully responsive and mobile-optimized</p>
    <a href="#" class="cta">Explore Our Features</a>
</body>
</html>'''

# Write the HTML file
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html_content)

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', '*')
        super().end_headers()

try:
    with socketserver.TCPServer((HOST, PORT), CustomHandler) as httpd:
        print(f"🚀 MarketBrand.ai Python Server is running!")
        print(f"📍 Local: http://localhost:{PORT}")
        print(f"🌐 Network: http://192.168.0.100:{PORT}")
        print(f"✨ Your website is ready!")
        print(f"Press Ctrl+C to stop the server")
        
        # Try to open browser automatically
        try:
            webbrowser.open(f'http://localhost:{PORT}')
        except:
            pass
            
        httpd.serve_forever()
        
except OSError as e:
    if e.errno == 10048:  # Port already in use
        print(f"❌ Port {PORT} is already in use!")
        print("Please close any existing servers or try a different port.")
    else:
        print(f"❌ Error starting server: {e}")
    input("Press Enter to exit...")
except KeyboardInterrupt:
    print("\n🛑 Server stopped by user")
except Exception as e:
    print(f"❌ Unexpected error: {e}")
    input("Press Enter to exit...")


