from flask import *

app = Flask('app')

@app.route('/number', methods=['POST', 'GET'])
def login():
    number=None
    if request.method == 'POST':
        number=request.form['number']
    return render_template('template.html', number=number, int=int, str=str)

app.run(host='0.0.0.0', port=8080)