from flask import *

app = Flask('app')

@app.route('/<number>')
def hello_world(number):
    return str(int(number) + 2)

app.run(host='0.0.0.0', port=8080)