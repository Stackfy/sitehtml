function ouvertoupas() {
    const now = new Date();
    const day = now.getDay();  // Jour de la semaine (0 = dimanche, 1 = lundi, etc.)
    const hour = now.getHours();  // Heure actuelle (de 0 à 23)
    const minutes = now.getMinutes();  // Minutes actuelles

    // Horaires d'ouverture (9h00 à 18h00 du lundi au vendredi)
    const openingHour = 9;
    const closingHour = 18;

    // Vérifier si c'est un jour de semaine (lundi à vendredi)
    if (day >= 1 && day <= 5) {
        if (hour >= openingHour && hour < closingHour) {
            document.getElementById('hours-status').innerHTML = "Nous sommes ouverts ! 🎉";
            document.getElementById('hours-status').style.color = "green";
        } else {
            document.getElementById('hours-status').innerHTML = "Nous sommes fermés. 🕔 Ouverture à 9h00.";
            document.getElementById('hours-status').style.color = "red";
        }
    } else {
        document.getElementById('hours-status').innerHTML = "Nous sommes fermés aujourd'hui. 📅 Ouverture lundi à 9h00.";
        document.getElementById('hours-status').style.color = "red";
    }
}

// Appeler la fonction pour vérifier les horaires
ouvertoupas();
