from flask import Flask, render_template, jsonify, request
import json
import random

app = Flask(__name__)

# Fix: specify UTF-8 encoding
with open('emoji.json', encoding='utf-8') as f:
    EMOJI_DATA = json.load(f)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get_emoji/<level>')
def get_emoji(level):
    if level in EMOJI_DATA:
        puzzle = random.choice(EMOJI_DATA[level])
        return jsonify(puzzle)
    return jsonify({'emoji': '❓', 'answer': 'Unknown'})

if __name__ == '__main__':
    app.run(debug=True)
