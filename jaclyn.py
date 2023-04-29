"""Server for Jaclyn Resume Page"""
import google.auth
from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build
from flask import (Flask, render_template)
import os

app = Flask(__name__) 
app.secret_key = os.environ['secret_key']

@app.route("/")
def homepage():
    """main page"""
    return render_template('jackie.html')


@app.route('/jaclyns-experience')
def display_resume():
    # Authenticate with the Google APIs using the default credentials
    credentials, project_id = google.auth.default(scopes=['https://www.googleapis.com/auth/drive'])
    
    # Create a Google Drive API client using the credentials
    drive_service = build('drive', 'v3', credentials=credentials)
    
    # Retrieve the ID of the Google Docs document
    doc_id = '1bnRqvh6UCB-WxyILswvRvrUgaA5B10gd518Td-aP8V0'
    
    # Use the Google Drive API to download the contents of the document in HTML format
    request = drive_service.files().export(fileId=doc_id, mimeType='text/html')
    html_content = request.execute()
    
    # Render a template that embeds the HTML content
    return render_template('resume.html', html_content=html_content)

if __name__ == '__main__':
    app.run()

