// #############################################
// #################### VAR ####################
// #############################################
// ########## <INPUT> ##########
//  home
var login_input = (document.querySelector("input.login")!=='undefined' && document.querySelector("input.login")!==null) 
    ? document.querySelector("input.login") 
        : false;
var password_input = (document.querySelector("input.password")!=='undefined' && document.querySelector("input.password")!==null) 
    ? document.querySelector("input.password") 
        : false;
var password_show = (document.querySelector("svg.password_show")!=='undefined' && document.querySelector("svg.password_show")!==null) 
    ? document.querySelector("svg.password_show") 
        : false;
var password_show_edit = (document.querySelector("svg.password_show>path")!=='undefined' && document.querySelector("svg.password_show>path")!==null) 
    ? document.querySelector("svg.password_show>path") 
        : false;
// register_customer
var lastname_user_input = (document.querySelector("input.lastname_user")!=='undefined' && document.querySelector("input.lastname_user")!==null) 
    ? document.querySelector("input.lastname_user") 
        : false;
var firstname_user_input = (document.querySelector("input.firstname_user")!=='undefined' && document.querySelector("input.firstname_user")!==null) 
    ? document.querySelector("input.firstname_user") 
        : false;
var city_user_input = (document.querySelector("input.city_user")!=='undefined' && document.querySelector("input.city_user")!==null) 
    ? document.querySelector("input.city_user") 
        : false;
var tel_user_input = (document.querySelector("input.tel_user")!=='undefined' && document.querySelector("input.tel_user")!==null) 
    ? document.querySelector("input.tel_user") 
        : false;
var email_user_input = (document.querySelector("input.email_user")!=='undefined' && document.querySelector("input.email_user")!==null) 
    ? document.querySelector("input.email_user") 
        : false;
var password_user_input = (document.querySelector("input.password_user")!=='undefined' && document.querySelector("input.password_user")!==null) 
    ? document.querySelector("input.password_user") 
        : false;
var password_confirm_user_input = (document.querySelector("input.password_confirm_user")!=='undefined' && document.querySelector("input.password_confirm_user")!==null) 
    ? document.querySelector("input.password_confirm_user") 
        : false;
// register_assoc
var name_assoc_input = (document.querySelector("input.name_assoc")!=='undefined' && document.querySelector("input.name_assoc")!==null) 
    ? document.querySelector("input.name_assoc") 
        : false;
var siret_assoc_input = (document.querySelector("input.siret_assoc")!=='undefined' && document.querySelector("input.siret_assoc")!==null) 
    ? document.querySelector("input.siret_assoc") 
        : false;
var adress_street_assoc_input = (document.querySelector("input.adress_street_assoc")!=='undefined' && document.querySelector("input.adress_street_assoc")!==null) 
    ? document.querySelector("input.adress_street_assoc") 
        : false;
var adress_cp_assoc_input = (document.querySelector("input.adress_cp_assoc")!=='undefined' && document.querySelector("input.adress_cp_assoc")!==null) 
    ? document.querySelector("input.adress_cp_assoc") 
        : false;
var adress_city_assoc_input = (document.querySelector("input.adress_city_assoc")!=='undefined' && document.querySelector("input.adress_city_assoc")!==null) 
    ? document.querySelector("input.adress_city_assoc") 

        : false;
var manager_lastname_assoc_input = (document.querySelector("input.manager_lastname_assoc")!=='undefined' && document.querySelector("input.manager_lastname_assoc")!==null) 
    ? document.querySelector("input.manager_lastname_assoc") 
        : false;
var manager_firstname_assoc_input = (document.querySelector("input.manager_firstname_assoc")!=='undefined' && document.querySelector("input.manager_firstname_assoc")!==null) 
    ? document.querySelector("input.manager_firstname_assoc") 
        : false;
var manager_tel_assoc_input = (document.querySelector("input.manager_tel_assoc")!=='undefined' && document.querySelector("input.manager_tel_assoc")!==null) 
    ? document.querySelector("input.manager_tel_assoc") 
        : false;
var manager_email_assoc_input = (document.querySelector("input.manager_email_assoc")!=='undefined' && document.querySelector("input.manager_email_assoc")!==null) 
    ? document.querySelector("input.manager_email_assoc") 
        : false;
var discipline_assoc_input = (document.querySelector("select.discipline_assoc")!=='undefined' && document.querySelector("select.discipline_assoc")!==null) 
    ? document.querySelector("select.discipline_assoc") 
        : false;
// action
var date_action_input = (document.querySelector("input.date_action")!=='undefined' && document.querySelector("input.date_action")!==null) 
    ? document.querySelector("input.date_action") 
        : false;
var nature_action_input = (document.querySelector("input.nature_action")!=='undefined' && document.querySelector("input.nature_action")!==null) 
    ? document.querySelector("input.nature_action") 
        : false;
var km_action_input = (document.querySelector("input.km_action")!=='undefined' && document.querySelector("input.km_action")!==null) 
    ? document.querySelector("input.km_action") 
        : false;
var time_start_action_input = (document.querySelector("select.time_start_action")!=='undefined' && document.querySelector("select.time_start_action")!==null) 
    ? document.querySelector("select.time_start_action") 
        : false;
var time_end_action_input = (document.querySelector("select.time_end_action")!=='undefined' && document.querySelector("select.time_end_action")!==null) 
    ? document.querySelector("select.time_end_action") 
        : false;
var duration_action_input = (document.querySelector("input.duration_action")!=='undefined' && document.querySelector("input.duration_action")!==null) 
    ? document.querySelector("input.duration_action") 
        : false;
var groupe_classification_action_input = (document.querySelector("select.groupe_classification_action")!=='undefined' && document.querySelector("select.groupe_classification_action")!==null) 
    ? document.querySelector("select.groupe_classification_action") 
        : false;
var frais_horaires_action_input = (document.querySelector("input.frais_horaires_action")!=='undefined' && document.querySelector("input.frais_horaires_action")!==null) 
    ? document.querySelector("input.frais_horaires_action") 
        : false;
var frais_km_action_input = (document.querySelector("input.frais_km_action")!=='undefined' && document.querySelector("input.frais_km_action")!==null) 
    ? document.querySelector("input.frais_km_action") 
        : false;
var other_cost_action_input = (document.querySelector("input.other_cost_action")!=='undefined' && document.querySelector("input.other_cost_action")!==null) 
    ? document.querySelector("input.other_cost_action") 
        : false;
var bareme_action_input = (document.querySelector("input.bareme_action")!=='undefined' && document.querySelector("input.bareme_action")!==null) 
    ? document.querySelector("input.bareme_action") 
        : false;
var frais_action_input = (document.querySelector("input.frais_action")!=='undefined' && document.querySelector("input.frais_action")!==null) 
    ? document.querySelector("input.frais_action") 
        : false;
var frais_déplacement_action_input = (document.querySelector("input.frais_déplacement_action")!=='undefined' && document.querySelector("input.frais_déplacement_action")!==null) 
    ? document.querySelector("input.frais_déplacement_action") 
        : false;
var payement_action_input = (document.querySelector("input.payement_action")!=='undefined' && document.querySelector("input.payement_action")!==null) 
    ? document.querySelector("input.payement_action") 
        : false;
var valorisation_action_input = (document.querySelector("input.valorisation_action")!=='undefined' && document.querySelector("input.valorisation_action")!==null) 
    ? document.querySelector("input.valorisation_action") 
        : false;
var don_action_input = (document.querySelector("input.don_action")!=='undefined' && document.querySelector("input.don_action")!==null) 
    ? document.querySelector("input.don_action") 
        : false;
// ########## <SMALL> ##########
// home
var login_error = (document.querySelector("small.login")!=='undefined' && document.querySelector("small.login")!==null) 
    ? document.querySelector("small.login") 
        : false;
var password_error = (document.querySelector("small.password")!=='undefined' && document.querySelector("small.password")!==null) 
    ? document.querySelector("small.password") 
        : false;
// register_customer
var lastname_user_error = (document.querySelector("small.lastname_user")!=='undefined' && document.querySelector("small.lastname_user")!==null) 
    ? document.querySelector("small.lastname_user") 
        : false;
var firstname_user_error = (document.querySelector("small.firstname_user")!=='undefined' && document.querySelector("small.firstname_user")!==null) 
    ? document.querySelector("small.firstname_user") 
        : false;
var city_user_error = (document.querySelector("small.city_user")!=='undefined' && document.querySelector("small.city_user")!==null) 
    ? document.querySelector("small.city_user") 
        : false;
var tel_user_error = (document.querySelector("small.tel_user")!=='undefined' && document.querySelector("small.tel_user")!==null) 
    ? document.querySelector("small.tel_user") 
        : false;
var email_user_error = (document.querySelector("small.email_user")!=='undefined' && document.querySelector("small.email_user")!==null) 
    ? document.querySelector("small.email_user") 
        : false;
var password_user_error = (document.querySelector("small.password_user")!=='undefined' && document.querySelector("small.password_user")!==null) 
    ? document.querySelector("small.password_user") 
        : false;
var password_confirm_user_error = (document.querySelector("small.password_confirm_user")!=='undefined' && document.querySelector("small.password_confirm_user")!==null) 
    ? document.querySelector("small.password_confirm_user") 
        : false;
// register_assoc
var name_assoc_error = (document.querySelector("small.name_assoc")!=='undefined' && document.querySelector("small.name_assoc")!==null) 
    ? document.querySelector("small.name_assoc") 
        : false;
var siret_assoc_error = (document.querySelector("small.siret_assoc")!=='undefined' && document.querySelector("small.siret_assoc")!==null) 
    ? document.querySelector("small.siret_assoc") 
        : false;
var adress_street_assoc_error = (document.querySelector("small.adress_street_assoc")!=='undefined' && document.querySelector("small.adress_street_assoc")!==null) 
    ? document.querySelector("small.adress_street_assoc") 
        : false;
var adress_cp_assoc_error = (document.querySelector("small.adress_cp_assoc")!=='undefined' && document.querySelector("small.adress_cp_assoc")!==null) 
    ? document.querySelector("small.adress_cp_assoc") 
        : false;
var adress_city_assoc_error = (document.querySelector("small.adress_city_assoc")!=='undefined' && document.querySelector("small.adress_city_assoc")!==null) 
    ? document.querySelector("small.adress_city_assoc") 
        : false;
var manager_lastname_assoc_error = (document.querySelector("small.manager_lastname_assoc")!=='undefined' && document.querySelector("small.manager_lastname_assoc")!==null) 
    ? document.querySelector("small.manager_lastname_assoc") 
        : false;
var manager_firstname_assoc_error = (document.querySelector("small.manager_firstname_assoc")!=='undefined' && document.querySelector("small.manager_firstname_assoc")!==null) 
    ? document.querySelector("small.manager_firstname_assoc") 
        : false;
var manager_tel_assoc_error = (document.querySelector("small.manager_tel_assoc")!=='undefined' && document.querySelector("small.manager_tel_assoc")!==null) 
    ? document.querySelector("small.manager_tel_assoc") 
        : false;
var manager_email_assoc_error = (document.querySelector("small.manager_email_assoc")!=='undefined' && document.querySelector("small.manager_email_assoc")!==null) 
    ? document.querySelector("small.manager_email_assoc") 
        : false;
// var discipline_assoc_error = (document.querySelector("small.discipline_assoc")!=='undefined' && document.querySelector("small.discipline_assoc")!==null) 
//     ? document.querySelector("small.discipline_assoc") 
//         : false;
// action
var date_action_error = (document.querySelector("small.date_action")!=='undefined' && document.querySelector("small.date_action")!==null) 
    ? document.querySelector("small.date_action") 
        : false;
var nature_action_error = (document.querySelector("small.nature_action")!=='undefined' && document.querySelector("small.nature_action")!==null) 
    ? document.querySelector("small.nature_action") 
        : false;
var km_action_error = (document.querySelector("small.km_action")!=='undefined' && document.querySelector("small.km_action")!==null) 
    ? document.querySelector("small.km_action") 
        : false;
var time_start_action_error = (document.querySelector("small.time_start_action")!=='undefined' && document.querySelector("small.time_start_action")!==null) 
    ? document.querySelector("small.time_start_action") 
        : false;
var time_end_action_error = (document.querySelector("small.time_end_action")!=='undefined' && document.querySelector("small.time_end_action")!==null) 
    ? document.querySelector("small.time_end_action") 
        : false;
var duration_action_error = (document.querySelector("small.duration_action")!=='undefined' && document.querySelector("small.duration_action")!==null) 
    ? document.querySelector("small.duration_action") 
        : false;
var groupe_classification_action_error = (document.querySelector("small.groupe_classification_action")!=='undefined' && document.querySelector("small.groupe_classification_action")!==null) 
    ? document.querySelector("small.groupe_classification_action") 
        : false;
var frais_horaires_action_error = (document.querySelector("small.frais_horaires_action")!=='undefined' && document.querySelector("small.frais_horaires_action")!==null) 
    ? document.querySelector("small.frais_horaires_action") 
        : false;
var frais_km_action_error = (document.querySelector("small.frais_km_action")!=='undefined' && document.querySelector("small.frais_km_action")!==null) 
    ? document.querySelector("small.frais_km_action") 
        : false;
var other_cost_action_error = (document.querySelector("small.other_cost_action")!=='undefined' && document.querySelector("small.other_cost_action")!==null) 
    ? document.querySelector("small.other_cost_action") 
        : false;
var bareme_action_error = (document.querySelector("small.bareme_action")!=='undefined' && document.querySelector("small.bareme_action")!==null) 
    ? document.querySelector("small.bareme_action") 
        : false;
var frais_action_error = (document.querySelector("small.frais_action")!=='undefined' && document.querySelector("small.frais_action")!==null) 
    ? document.querySelector("small.frais_action") 
        : false;
var frais_déplacement_action_error = (document.querySelector("small.frais_déplacement_action")!=='undefined' && document.querySelector("small.frais_déplacement_action")!==null) 
    ? document.querySelector("small.frais_déplacement_action") 
        : false;
var payement_action_error = (document.querySelector("small.payement_action")!=='undefined' && document.querySelector("small.payement_action")!==null) 
    ? document.querySelector("small.payement_action") 
        : false;
var valorisation_action_error = (document.querySelector("small.valorisation_action")!=='undefined' && document.querySelector("small.valorisation_action")!==null) 
    ? document.querySelector("small.valorisation_action") 
        : false;
var don_action_error = (document.querySelector("small.don_action")!=='undefined' && document.querySelector("small.don_action")!==null) 
    ? document.querySelector("small.don_action") 
        : false;
// ########## <CHECKBOX> ##########
var password_user_show = (document.querySelector("input.password_user_show")!=='undefined' && document.querySelector("input.password_user_show")!==null) 
    ? document.querySelector("input.password_user_show") 
        : false;
// var password_show_assoc = (document.querySelector("input.password_show_assoc")!=='undefined' && document.querySelector("input.password_show_assoc")!==null) 
//     ? document.querySelector("input.password_show_assoc") 
//         : false;
// ########## <OTHER> ##########
var body = (document.querySelector("body")!=='undefined' && document.querySelector("body")!==null) 
    ? document.querySelector("body") 
        : false;
// ###################################################
// #################### NODE DATA ####################
// ###################################################

const debug = true;
var domData = {
    'home': {
        'login': {'node': login_input, 'error_name': 'login_error', 'error_node': login_error, 'text': 'Identifiant incorrect', 'has_error': false},
        'password': {'node': password_input, 'error_name': 'password_error', 'error_node': password_error, 'text': 'Mot de passe incorrect', 'has_error': false},
        'password_show': {password_show},
        'password_show_edit': {password_show_edit}
    },
    'register_customer': {
        'lastname_user': { 'node': lastname_user_input, 'error_name': 'lastname_user_error', 'error_node': lastname_user_error, 'text': 'Format invalide', 'has_error': false},
        'firstname_user': {'node': firstname_user_input, 'error_name': 'firstname_user_error', 'error_node': firstname_user_error, 'text': 'Format invalide', 'has_error': false},
        'city_user': {'node': city_user_input, 'error_name': 'city_user_error', 'error_node': city_user_error, 'text': 'Format invalide', 'has_error': false},
        'tel_user': {'node': tel_user_input, 'error_name': 'tel_user_error', 'error_node': tel_user_error, 'text': 'Téléphone invalide', 'has_error': false},
        'email_user': {'node': email_user_input, 'error_name': 'email_user_error', 'error_node': email_user_error, 'text': 'Email invalide', 'has_error': false},
        'password_user': {'node': password_user_input, 'error_name': 'password_user_error', 'error_node': password_user_error, 'text': 'Mot de passe invalide', 'has_error': false},
        'password_confirm_user': {'node': password_confirm_user_input, 'error_name': 'password_confirm_user_error', 'error_node': password_confirm_user_error, 'text': 'Mots de passe non identique', 'has_error': false},
        'password_user_show': {'node': password_user_show}
    },
    'register_assoc': {
        'lastname_user': { 'node': lastname_user_input, 'error_name': 'lastname_user_error', 'error_node': lastname_user_error, 'text': 'Format invalide', 'has_error': false},
        'firstname_user': {'node': firstname_user_input, 'error_name': 'firstname_user_error', 'error_node': firstname_user_error, 'text': 'Format invalide', 'has_error': false},
        'city_user': {'node': city_user_input, 'error_name': 'city_user_error', 'error_node': city_user_error, 'text': 'Format invalide', 'has_error': false},
        'tel_user': {'node': tel_user_input, 'error_name': 'tel_user_error', 'error_node': tel_user_error, 'text': 'Téléphone invalide', 'has_error': false},
        'email_user': {'node': email_user_input, 'error_name': 'email_user_error', 'error_node': email_user_error, 'text': 'Email invalide', 'has_error': false},
        'password_user': {'node': password_user_input, 'error_name': 'password_user_error', 'error_node': password_user_error, 'text': 'Mot de passe invalide', 'has_error': false},
        'password_confirm_user': {'node': password_confirm_user_input, 'error_name': 'password_confirm_user_error', 'error_node': password_confirm_user_error, 'text': 'Mots de passe non identique', 'has_error': false},
        'password_user_show': {'node': password_user_show},
        'name_assoc': {'node': name_assoc_input, 'error_name': 'name_assoc_error','error_node': name_assoc_error, 'text': 'Format invalide', 'has_error': false},
        'siret_assoc': {'node': siret_assoc_input, 'error_name': 'siret_assoc_error','error_node': siret_assoc_error, 'text': 'Siret invalide', 'has_error': false},
        'adress_street_assoc': {'node': adress_street_assoc_input, 'error_name': 'adress_street_assoc_error','error_node': adress_street_assoc_error, 'text': 'Format invalide', 'has_error': false},
        'adress_cp_assoc': {'node': adress_cp_assoc_input, 'error_name': 'adress_cp_assoc_error','error_node': adress_cp_assoc_error, 'text': 'Code postal invalide', 'has_error': false},
        'adress_city_assoc': {'node': adress_city_assoc_input, 'error_name': 'adress_city_assoc_error','error_node': adress_city_assoc_error, 'text': 'Format invalide', 'has_error': false},
        'manager_lastname_assoc': {'node':  manager_lastname_assoc_input, 'error_name': 'manager_lastname_assoc_error','error_node': manager_lastname_assoc_error, 'text': 'Format invalide', 'has_error': false},
        'manager_firstname_assoc': {'node': manager_firstname_assoc_input, 'error_name': 'manager_firstname_assoc_error','error_node': manager_firstname_assoc_error, 'text': 'Format invalide', 'has_error': false},
        'manager_tel_assoc': {'node': manager_tel_assoc_input, 'error_name': 'manager_tel_assoc_error','error_node': manager_tel_assoc_error, 'text': 'Téléphone invalide', 'has_error': false},
        'manager_email_assoc': {'node': manager_email_assoc_input, 'error_name': 'manager_email_assoc_error','error_node': manager_email_assoc_error, 'text': 'Email invalide', 'has_error': false},
        'discipline_assoc': {'node': discipline_assoc_input, 'error_name': null,'error_node': null}
    },
    'action': {
        'date_action': { 'node': date_action_input, 'error_name': 'date_action_error', 'error_node': date_action_error, 'text': 'Format invalide', 'has_error': false},
        'nature_action': { 'node': nature_action_input, 'error_name': 'nature_action_error', 'error_node': nature_action_error, 'text': 'Format invalide', 'has_error': false},
        'km_action': { 'node': km_action_input, 'error_name': 'km_action_error', 'error_node': km_action_error, 'text': 'Format invalide', 'has_error': false},
        'time_start_action': { 'node': time_start_action_input, 'error_name': 'time_start_action_error', 'error_node': time_start_action_error, 'text': 'Format invalide', 'has_error': false},
        'time_end_action': { 'node': time_end_action_input, 'error_name': 'time_end_action_error', 'error_node': time_end_action_error, 'text': 'Format invalide', 'has_error': false},
        'duration_action': { 'node': duration_action_input, 'error_name': 'duration_action_error', 'error_node': duration_action_error, 'text': 'Format invalide', 'has_error': false},
        'groupe_classification_action': { 'node': groupe_classification_action_input, 'error_name': 'groupe_classification_action_error', 'error_node': groupe_classification_action_error, 'text': 'Format invalide', 'has_error': false},
        'frais_horaires_action': { 'node': frais_horaires_action_input, 'error_name': 'frais_horaires_action_error', 'error_node': frais_horaires_action_error, 'text': 'Format invalide', 'has_error': false},
        'frais_km_action': { 'node': frais_km_action_input, 'error_name': 'frais_km_action_error', 'error_node': frais_km_action_error, 'text': 'Format invalide', 'has_error': false},
        'other_cost_action': { 'node': other_cost_action_input, 'error_name': 'other_cost_action_error', 'error_node': other_cost_action_error, 'text': 'Format invalide', 'has_error': false},
        'bareme_action': { 'node': bareme_action_input, 'error_name': 'bareme_action_error', 'error_node': bareme_action_error, 'text': 'Format invalide', 'has_error': false},
        'frais_action': { 'node': frais_action_input, 'error_name': 'frais_action_error', 'error_node': frais_action_error, 'text': 'Format invalide', 'has_error': false},
        'frais_deplacement_action': { 'node': frais_deplacement_action_input, 'error_name': 'frais_deplacement_action_error', 'error_node': frais_deplacement_action_error, 'text': 'Format invalide', 'has_error': false},
        'payement_action': { 'node': payement_action_input, 'error_name': 'payement_action_error', 'error_node': payement_action_error, 'text': 'Format invalide', 'has_error': false},
        'valorisation_action': { 'node': valorisation_action_input, 'error_name': 'valorisation_action_error', 'error_node': valorisation_action_error, 'text': 'Format invalide', 'has_error': false},
        'don_action': { 'node': don_action_input, 'error_name': 'don_action_error', 'error_node': don_action_error, 'text': 'Format invalide', 'has_error': false},
    }
};
if (debug === true) {
    console.log(domData);
}
// #######################################################
// #################### EVENTLISTENER ####################
// #######################################################
// #################### HOME ####################
if (body.id === "home")
{
    // blur
    login_input.addEventListener('blur', loginManager, true);
    password_input.addEventListener('blur', loginManager, true);
    // focus
    login_input.addEventListener('focus', loginManager, true);
    password_input.addEventListener('focus', loginManager, true);
    // click
    password_show.addEventListener('click', passwordViewer, true);
    // submit
    document.addEventListener('submit', loginManager, true);
}
// #################### REGISTER customer ####################
if (body.id === 'register_customer' || body.id === 'register_assoc')
{
    // blur
    lastname_user_input.addEventListener('blur', customerManager, true);
    firstname_user_input.addEventListener('blur', customerManager, true);
    city_user_input.addEventListener('blur', customerManager, true);
    tel_user_input.addEventListener('blur', customerManager, true);
    email_user_input.addEventListener('blur', customerManager, true);
    password_user_input.addEventListener('blur', customerManager, true);
    password_confirm_user_input.addEventListener('blur', customerManager, true);
    // focus
    lastname_user_input.addEventListener('focus', customerManager, true);
    firstname_user_input.addEventListener('focus', customerManager, true);
    city_user_input.addEventListener('focus', customerManager, true);
    tel_user_input.addEventListener('focus', customerManager, true);
    email_user_input.addEventListener('focus', customerManager, true);
    password_user_input.addEventListener('focus', customerManager, true);
    password_confirm_user_input.addEventListener('focus', customerManager, true);
    // click
    password_show.addEventListener('click', passwordViewer, true);
    // submit
    document.addEventListener('submit', customerManager, true);
}
// #################### REGISTER ASSOC ####################
if (body.id === 'register_assoc')
{
    // blur
    name_assoc_input.addEventListener('blur', assocManager, true);
    siret_assoc_input.addEventListener('blur', assocManager, true);
    adress_street_assoc_input.addEventListener('blur', assocManager, true);
    adress_cp_assoc_input.addEventListener('blur', assocManager, true);
    adress_city_assoc_input.addEventListener('blur', assocManager, true);
    manager_lastname_assoc_input.addEventListener('blur', assocManager, true);
    manager_firstname_assoc_input.addEventListener('blur', assocManager, true);
    manager_tel_assoc_input.addEventListener('blur', assocManager, true);
    manager_email_assoc_input.addEventListener('blur', assocManager, true);
    discipline_assoc_input.addEventListener('blur', assocManager, true);
    // focus
    name_assoc_input.addEventListener('focus', assocManager, true);
    siret_assoc_input.addEventListener('focus', assocManager, true);
    adress_street_assoc_input.addEventListener('focus', assocManager, true);
    adress_cp_assoc_input.addEventListener('focus', assocManager, true);
    adress_city_assoc_input.addEventListener('focus', assocManager, true);
    manager_lastname_assoc_input.addEventListener('focus', assocManager, true);
    manager_firstname_assoc_input.addEventListener('focus', assocManager, true);
    manager_tel_assoc_input.addEventListener('focus', assocManager, true);
    manager_email_assoc_input.addEventListener('focus', assocManager, true);
    discipline_assoc_input.addEventListener('focus', assocManager, true);
    // click
    password_show_assoc.addEventListener('click', passwordViewer, true);
    // change
    discipline_assoc_input.addEventListener('focus', assocManager, true);
    // submit
    document.addEventListener('submit', assocManager, true);
}
// action
if (body.id === "action") 
{
    // blur
    date_action_input.addEventListener('blur', actionManager, true);
    nature_action_input.addEventListener('blur', actionManager, true);
    km_action_input.addEventListener('blur', actionManager, true);
    time_start_action_input.addEventListener('blur', actionManager, true);
    time_end_action_input.addEventListener('blur', actionManager, true);
    duration_action_input.addEventListener('blur', actionManager, true);
    groupe_classification_action_input.addEventListener('blur', actionManager, true);
    frais_horaires_action_input.addEventListener('blur', actionManager, true);
    frais_km_action_input.addEventListener('blur', actionManager, true);
    other_cost_action_input.addEventListener('blur', actionManager, true);
    bareme_action_input.addEventListener('blur', actionManager, true);
    frais_action_input.addEventListener('blur', actionManager, true);
    frais_deplacement_action_input.addEventListener('blur', actionManager, true);
    payement_action_input.addEventListener('blur', actionManager, true);
    valorisation_action_input.addEventListener('blur', actionManager, true);
    don_action_input.addEventListener('blur', actionManager, true);
    // focus
    date_action_input.addEventListener('focus', actionManager, true);
    nature_action_input.addEventListener('focus', actionManager, true);
    km_action_input.addEventListener('focus', actionManager, true);
    time_start_action_input.addEventListener('focus', actionManager, true);
    time_end_action_input.addEventListener('focus', actionManager, true);
    duration_action_input.addEventListener('focus', actionManager, true);
    groupe_classification_action_input.addEventListener('focus', actionManager, true);
    frais_horaires_action_input.addEventListener('focus', actionManager, true);
    frais_km_action_input.addEventListener('focus', actionManager, true);
    other_cost_action_input.addEventListener('focus', actionManager, true);
    bareme_action_input.addEventListener('focus', actionManager, true);
    frais_action_input.addEventListener('focus', actionManager, true);
    frais_deplacement_action_input.addEventListener('focus', actionManager, true);
    payement_action_input.addEventListener('focus', actionManager, true);
    valorisation_action_input.addEventListener('focus', actionManager, true);
    don_action_input.addEventListener('focus', actionManager, true);
    // submit
    document.addEventListener('submit', actionManager, true);
}
// ######################################################
// #################### EVENTMANAGER ####################
// ######################################################
function loginManager()
{
    switch(event.type)
    {
        case 'blur':
            switch(event.target.className)
            {
                case 'login':
                    isValidEmail(login_input.value)
                        ? valid(login_input)
                            : unvalid(login_input);
                    break;
                case 'password':
                    isValidPassword(password_input.value)
                    ? valid(password_input)
                        : unvalid(password_input);
                    break;
            }
            break;
        case 'focus':
            resetValid(event.target);
            break;
        case 'click':
            break;
        case 'submit':
            submitValidator(event, body.id);
            break;
        default :
            throw new Error('Event type not found');
    }
}

function customerManager()
{
    switch(event.type)
    {
        case 'blur':
            switch(event.target.className)
            {
                case 'lastname_user':
                    isValidString(lastname_user_input.value) 
                        ? valid(lastname_user_input) 
                            : unvalid(lastname_user_input);
                    break;
                case 'firstname_user':
                    isValidString(firstname_user_input.value) 
                        ? valid(firstname_user_input) 
                            : unvalid(firstname_user_input);
                    break;
                case 'city_user':
                    isValidString(city_user_input.value) 
                        ? valid(city_user_input) 
                            : unvalid(city_user_input);
                    break;
                case 'tel_user':
                    isValidTel(tel_user_input.value) 
                        ? valid(tel_user_input) 
                            : unvalid(tel_user_input);
                    break;
                case 'email_user':
                    isValidEmail(email_user_input.value) 
                        ? valid(email_user_input) 
                            : unvalid(email_user_input);
                    break;
                case 'password_user':
                    isValidPassword(password_user_input.value) 
                        ? valid(password_user_input) 
                            : unvalid(password_user_input);
                    break;
                case 'password_confirm_user':
                    password_confirm_user_input.value === password_user_input.value
                        ? valid(password_confirm_user_input) 
                            : unvalid(password_confirm_user_input);
                    break;
                default: console.log('The event <' + event + '> can\'t match the classname <' + event.target.className+ '>');
            }
            break;
        case 'focus':
            resetValid(event.target);
            break;
        case 'click':
            break;
        case 'submit':
            submitValidator(event, body.id);
            break;
        default :
            throw new Error('Event type not found');
    }
}

function assocManager()
{
    switch(event.type)
    {
        case 'blur':
            switch(event.target.className)
            {
                case 'name_assoc':
                    isValidString(name_assoc_input.value) 
                        ? valid(name_assoc_input) 
                            : unvalid(name_assoc_input);
                    break;
                case 'siret_assoc':
                    isValidSiret(siret_assoc_input.value) 
                        ? valid(siret_assoc_input) 
                            : unvalid(siret_assoc_input);
                    break;
                case 'adress_street_assoc':
                    isValidString(adress_street_assoc_input.value) 
                        ? valid(adress_street_assoc_input) 
                            : unvalid(adress_street_assoc_input);
                    break;
                case 'adress_cp_assoc':
                    isValidCp(adress_cp_assoc_input.value) 
                        ? valid(adress_cp_assoc_input) 
                            : unvalid(adress_cp_assoc_input);
                    break;
                case 'adress_city_assoc':
                    isValidString(adress_city_assoc_input.value) 
                        ? valid(adress_city_assoc_input) 
                            : unvalid(adress_city_assoc_input);
                    break;
                case 'manager_lastname_assoc':
                    isValidString(manager_lastname_assoc_input.value) 
                        ? valid(manager_lastname_assoc_input) 
                            : unvalid(manager_lastname_assoc_input);
                    break;
                case 'manager_firstname_assoc':
                    isValidString(manager_firstname_assoc_input.value) 
                        ? valid(manager_firstname_assoc_input) 
                            : unvalid(manager_firstname_assoc_input);
                    break;
                case 'manager_tel_assoc':
                    isValidTel(manager_tel_assoc_input.value) 
                        ? valid(manager_tel_assoc_input) 
                            : unvalid(manager_tel_assoc_input);
                    break;
                case 'manager_email_assoc':
                    isValidEmail(manager_email_assoc_input.value) 
                        ? valid(manager_email_assoc_input) 
                            : unvalid(manager_email_assoc_input);
                    break;
                case 'discipline_assoc':
                    isValidDiscipline(discipline_assoc_input) 
                        ? valid(discipline_assoc_input)
                            : unvalid(discipline_assoc_input, false);
                    break;
            }
            break;
        case 'focus':
            if (event.target.classList.length === 1) {
                if (event.target.className === "discipline_assoc") {
                    resetValid(event.target, false);
                } else {
                    resetValid(event.target);
                }
            } else {
                if (event.target.className[0] === "discipline_assoc") {
                    resetValid(event.target, false);
                } else {
                    resetValid(event.target);
                }
            }
            break;
        case 'click':
            break;
        case 'change': 
            if (event.target.classList.length === 1) {
                if (event.target.className === "discipline_assoc") {
                    resetValid(event.target, false);
                } else {
                    resetValid(event.target);
                }
            } else {
                if (event.target.className[0] === "discipline_assoc") {
                    resetValid(event.target, false);
                } else {
                    resetValid(event.target);
                }
            }
            break;
        case 'submit':
                submitValidator(event, body.id);
                break;
        default :
            throw new Error('Event type not found');
    }
}

function actionManager()
{
    switch(event.type)
    {
        case 'blur':
            switch(event.target.className)
            {
                case 'date_action':
                    isValidDate(date_action_input.value) 
                        ? valid(date_action_input) 
                            : unvalid(date_action_input);
                    break;
                case 'nature_action':
                    isValidString(nature_action_input.value) 
                        ? valid(nature_action_input) 
                            : unvalid(nature_action_input);
                    break;
                case 'km_action':
                isValidString(km_action_input.value) 
                    ? valid(km_action_input) 
                        : unvalid(km_action_input);
                    break;
                case 'time_start_action':
                isValidInject(time_start_action_input.value) 
                    ? valid(time_start_action_input) 
                        : unvalid(time_start_action_input);
                    break;
                case 'time_end_action':
                isValidInject(time_end_action_input.value) 
                    ? valid(time_end_action_input) 
                        : unvalid(time_end_action_input);
                    break;
                case 'duration_action':
                isValidInject(duration_action_input.value) 
                    ? valid(duration_action_input) 
                        : unvalid(duration_action_input);
                    break;
                case 'groupe_classification_action':
                isValidInject(groupe_classification_action_input.value) 
                    ? valid(groupe_classification_action_input) 
                        : unvalid(groupe_classification_action_input);
                    break;
                case 'frais_horaires_action':
                isValidInject(frais_horaires_action_input.value) 
                    ? valid(frais_horaires_action_input) 
                        : unvalid(frais_horaires_action_input);
                    break;
                case 'frais_km_action':
                isValidNumber(frais_km_action_input.value) 
                    ? valid(frais_km_action_input) 
                        : unvalid(frais_km_action_input);
                    break;
                case 'other_cost_action':
                isValidString(other_cost_action_input.value) 
                    ? valid(other_cost_action_input) 
                        : unvalid(other_cost_action_input);
                    break;
                case 'bareme_action':
                isValidString(bareme_action_input.value) 
                    ? valid(bareme_action_input) 
                        : unvalid(bareme_action_input);
                    break;
                case 'frais_action':
                isValidInject(frais_action_input.value) 
                    ? valid(frais_action_input) 
                        : unvalid(frais_action_input);
                    break;
                case 'frais_deplacement_action':
                isValidInject(frais_deplacement_action_input.value) 
                    ? valid(frais_deplacement_action_input) 
                        : unvalid(frais_deplacement_action_input);
                    break;
                case 'payement_action':
                isValidNumber(payement_action_input.value) 
                    ? valid(payement_action_input) 
                        : unvalid(payement_action_input);
                    break;
                case 'valorisation_action':
                isValidInject(valorisation_action_input.value) 
                    ? valid(valorisation_action_input) 
                        : unvalid(valorisation_action_input);
                    break;
                case 'don_action':
                isValidInject(don_action_input.value) 
                    ? valid(don_action_input) 
                        : unvalid(don_action_input);
                    break;
            }
            case 'focus':
                resetValid(event.target);
                break;
            case 'click':
                break;
            case 'submit':
                submitValidator(event, body.id);
                break;
            default :
                throw new Error('Event type not found');
    }
}

function passwordViewer(){ 
    switch(body.id)
    {
        case 'home':
            toggleView(password_input);
            break;
        case 'register_customer':
            toggleView(password_user_input);
            break;
        case 'register_assoc':
            toggleView(password_assoc_input);
            break;
    }
    function toggleView(node)
    {
        switch(node.type)
        {
            case 'password':
                node.type = 'text';
                password_show_edit.style.fill = "#13bd24";
                password_show_edit.style.fillOpacity = "1";
                break;
            case 'text':
                node.type = 'password';
                password_show_edit.style.fill = "currentColor";
                break;
        }
    }
}

function submitValidator(event, page) {
    event.preventDefault();
    let errorCount = 0;
    for (let node in domData[body.id])
    {
        if (node['has_error'])
        {
            errorCount++;
        }
    }
    if (errorCount === 0) {
        var form = (document.querySelector("form")!=='undefined' && document.querySelector("form")!==null) 
            ? document.querySelector("form") 
                : false;
        if(form) {
            form.submit();
        } else {
            throw new Error('submit node not found');
        }

    }
}
// ##################################################
// #################### FUNCTION ####################
// ##################################################


function valid(node)
{
    // OK style
    node.classList.add("valid");
    // save in domData a !error
    domData[body.id][node.classList[0]]['has_error'] = false;
}

function unvalid(node, canError = true)
{
    // NOK style
    node.classList.add("unvalid");
    // save in domData a error
    domData[body.id][node.classList[0]]['has_error'] = true;
    // edit error field content
    if (canError === true)
    {
        domData[body.id][node.classList[0]]['error_node'].innerHTML = domData[body.id][node.classList[0]]['text'];
    }
}

function resetValid(node, canError = true)
{
    // apply conditional style
    if(node.classList.contains("valid"))
    {
        node.classList.remove("valid");
    }
    if(node.classList.contains("unvalid"))
    {
        node.classList.remove("unvalid");
    }
    // reset in domData a error
    domData[body.id][node.classList[0]]['has_error'] = false;
    // clean error field
    if (canError === true)
    {
        domData[body.id][node.classList[0]]['error_node'].innerHTML = '';
    }
}

function isValidString(field)
{
    return (field.length >= 3 && field.length <= 45) ? true : false;
}

function isValidEmail(field)
{
    let regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    return regex.test(field);
}

function isValidTel(field)
{
    let regex = /^(?:0|\(?\+33\)?\s?|0033\s?)[1-79](?:[\.\-\s]?\d\d){4}$/;
    return regex.test(field);
}

function isValidSiret(field) 
{
    let regex = /^[0-9A-Z]{14}$/;
    return regex.test(field);
}

function isValidCp(field)
{
    let regex = /^[0-9]{5}$/;
    return regex.test(field);
}

function isValidPassword(field)
{
    let regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{6,15})$/;
    return regex.test(field);
}

function isValidDiscipline(field)
{
    return field.value != 0 ? true : false;
}

function isValidNumber(field)
{
    let regex = /^[0-9]$/;
    return regex.test(field);
}
// ####################################################
// #################### AJAX UTILS ####################
// ####################################################
// class AjaxWorker {
//     constructor(_url, _method="POST")
//     {
//         this.url = _url;
//         this.method = _method;
//         this.errorArray = [];
//     }

//     async send(_post)
//     {
//         try {
//             switch(method)
//             {
//                 case 'POST': 
//                     const response = await fetch(this.url, {
//                         method: "POST",
//                         body: _post,
//                         headers: {
//                             'Content-Type': 'multipart/form-data'
//                         }
//                     });
//                 break;
//                 case 'GET': 
//                     response = await fetch(this.url);
//                 break;
//                 default:
//                     this.errorArray.push(new Error('Method argument must be POST or GET'));
//                     return this.errorArray;
//             }
            
//             if (response.ok) {
//                 const jsonData = await response.json();
//                 return jsonData;
//             } else {
//                 this.errorArray.push(new Error('server response : ' + response.status));
//                 return this.errorArray;
//             }
//         } catch (error) {
//             this.errorArray.push(error);
//             return this.errorArray;
//         }
//     }
// }

// const sendLoginForm =  async () => {
//     const response = await fetch('');
//     if (response.ok) {
//         const jsonData =  await response.json();
//     } else {

//     }
// }

