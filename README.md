# 🏏 IPL Prediction Model - Technical Assessment Submission

A machine learning model to predict the winning probability of IPL teams based on match conditions. Built using Python, pandas, scikit-learn, and streamlit for interactive visualization.

---

## 📁 Project Structure

├── dataset\            # Cleaned and preprocessed IPL data  
├── models\             # Trained model saved as a .pkl file  
├── IPL_prediction.py   # Streamlit web app  
├── model.py            # ML model training script  
├── prediction.py       # Prediction logic using trained model  
└── requirements.txt    # Dependencies

---

## 🚀 Features

* Predict win probabilities for teams in an ongoing IPL match
* Real-time interactive UI with Streamlit
* Clean and modular code for easy extension
* Data preprocessing, model training, and UI decoupled

---

<details>
<summary>📦 Installation</summary>

bash
# Clone the repo
git clone https://github.com/KrishGarg001/IPL-Prediction-Model---Technical-Assessment-Submission.git
cd IPL-Prediction-Model---Technical-Assessment-Submission

# Create virtual environment (optional but recommended)
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

</details>

---

<details>
<summary>🧠 Model Training</summary>

The model is trained using historical IPL match data. To retrain the model:

bash
python model.py

* Model used: Logistic Regression
* Features: Batting team, Bowling team, Venue, Score, Overs, Wickets, etc.
* Output: Trained model saved as `models/ipl_model.pkl`

</details>

---

<details>
<summary>💡 Run the Prediction App</summary>

To launch the web app:

bash
streamlit run IPL_prediction.py

You can then access it in your browser at: `http://localhost:8501`

🔢 Input the following:

* Batting and bowling teams
* City
* Current score, overs, wickets
* Target score

📊 Get real-time predictions of winning probabilities.

</details>

---

## 📊 Example Prediction Output

Batting Team: CSK
Bowling Team: MI
City: Mumbai
Current Score: 120/4 in 15 overs
Target: 180

➡️ Predicted Probability:
CSK: 35%
MI: 65%

---

## ✅ Requirements

* Python 3.10+
* pandas
* numpy
* scikit-learn
* streamlit

All dependencies are listed in `requirements.txt`.

## 🙌 Acknowledgements

* IPL data sourced from Kaggle
* Built as part of a technical assessment
