(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["base"],{

/***/ "./assets/js/base.js":
/*!***************************!*\
  !*** ./assets/js/base.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// #############################################
// #################### VAR ####################
// #############################################
// ########## <INPUT> ##########
//  home
var login_input = document.querySelector("input.login") !== 'undefined' && document.querySelector("input.login") !== null ? document.querySelector("input.login") : false;
var password_input = document.querySelector("input.password") !== 'undefined' && document.querySelector("input.password") !== null ? document.querySelector("input.password") : false;
var password_show = document.querySelector("svg.password_show") !== 'undefined' && document.querySelector("svg.password_show") !== null ? document.querySelector("svg.password_show") : false;
var password_show_edit = document.querySelector("svg.password_show>path") !== 'undefined' && document.querySelector("svg.password_show>path") !== null ? document.querySelector("svg.password_show>path") : false; // register_customer

var lastname_user_input = document.querySelector("input.lastname_user") !== 'undefined' && document.querySelector("input.lastname_user") !== null ? document.querySelector("input.lastname_user") : false;
var firstname_user_input = document.querySelector("input.firstname_user") !== 'undefined' && document.querySelector("input.firstname_user") !== null ? document.querySelector("input.firstname_user") : false;
var city_user_input = document.querySelector("input.city_user") !== 'undefined' && document.querySelector("input.city_user") !== null ? document.querySelector("input.city_user") : false;
var tel_user_input = document.querySelector("input.tel_user") !== 'undefined' && document.querySelector("input.tel_user") !== null ? document.querySelector("input.tel_user") : false;
var email_user_input = document.querySelector("input.email_user") !== 'undefined' && document.querySelector("input.email_user") !== null ? document.querySelector("input.email_user") : false;
var password_user_input = document.querySelector("input.password_user") !== 'undefined' && document.querySelector("input.password_user") !== null ? document.querySelector("input.password_user") : false;
var password_confirm_user_input = document.querySelector("input.password_confirm_user") !== 'undefined' && document.querySelector("input.password_confirm_user") !== null ? document.querySelector("input.password_confirm_user") : false; // register_assoc

var name_assoc_input = document.querySelector("input.name_assoc") !== 'undefined' && document.querySelector("input.name_assoc") !== null ? document.querySelector("input.name_assoc") : false;
var siret_assoc_input = document.querySelector("input.siret_assoc") !== 'undefined' && document.querySelector("input.siret_assoc") !== null ? document.querySelector("input.siret_assoc") : false;
var adress_street_assoc_input = document.querySelector("input.adress_street_assoc") !== 'undefined' && document.querySelector("input.adress_street_assoc") !== null ? document.querySelector("input.adress_street_assoc") : false;
var adress_cp_assoc_input = document.querySelector("input.adress_cp_assoc") !== 'undefined' && document.querySelector("input.adress_cp_assoc") !== null ? document.querySelector("input.adress_cp_assoc") : false;
var adress_city_assoc_input = document.querySelector("input.adress_city_assoc") !== 'undefined' && document.querySelector("input.adress_city_assoc") !== null ? document.querySelector("input.adress_city_assoc") : false;
var manager_lastname_assoc_input = document.querySelector("input.manager_lastname_assoc") !== 'undefined' && document.querySelector("input.manager_lastname_assoc") !== null ? document.querySelector("input.manager_lastname_assoc") : false;
var manager_firstname_assoc_input = document.querySelector("input.manager_firstname_assoc") !== 'undefined' && document.querySelector("input.manager_firstname_assoc") !== null ? document.querySelector("input.manager_firstname_assoc") : false;
var manager_tel_assoc_input = document.querySelector("input.manager_tel_assoc") !== 'undefined' && document.querySelector("input.manager_tel_assoc") !== null ? document.querySelector("input.manager_tel_assoc") : false;
var manager_email_assoc_input = document.querySelector("input.manager_email_assoc") !== 'undefined' && document.querySelector("input.manager_email_assoc") !== null ? document.querySelector("input.manager_email_assoc") : false;
var discipline_assoc_input = document.querySelector("select.discipline_assoc") !== 'undefined' && document.querySelector("select.discipline_assoc") !== null ? document.querySelector("select.discipline_assoc") : false; // action

var date_action_input = document.querySelector("input.date_action") !== 'undefined' && document.querySelector("input.date_action") !== null ? document.querySelector("input.date_action") : false;
var nature_action_input = document.querySelector("input.nature_action") !== 'undefined' && document.querySelector("input.nature_action") !== null ? document.querySelector("input.nature_action") : false;
var km_action_input = document.querySelector("input.km_action") !== 'undefined' && document.querySelector("input.km_action") !== null ? document.querySelector("input.km_action") : false;
var time_start_action_input = document.querySelector("select.time_start_action") !== 'undefined' && document.querySelector("select.time_start_action") !== null ? document.querySelector("select.time_start_action") : false;
var time_end_action_input = document.querySelector("select.time_end_action") !== 'undefined' && document.querySelector("select.time_end_action") !== null ? document.querySelector("select.time_end_action") : false;
var duration_action_input = document.querySelector("input.duration_action") !== 'undefined' && document.querySelector("input.duration_action") !== null ? document.querySelector("input.duration_action") : false;
var groupe_classification_action_input = document.querySelector("select.groupe_classification_action") !== 'undefined' && document.querySelector("select.groupe_classification_action") !== null ? document.querySelector("select.groupe_classification_action") : false;
var frais_horaires_action_input = document.querySelector("input.frais_horaires_action") !== 'undefined' && document.querySelector("input.frais_horaires_action") !== null ? document.querySelector("input.frais_horaires_action") : false;
var frais_km_action_input = document.querySelector("input.frais_km_action") !== 'undefined' && document.querySelector("input.frais_km_action") !== null ? document.querySelector("input.frais_km_action") : false;
var other_cost_action_input = document.querySelector("input.other_cost_action") !== 'undefined' && document.querySelector("input.other_cost_action") !== null ? document.querySelector("input.other_cost_action") : false;
var bareme_action_input = document.querySelector("input.bareme_action") !== 'undefined' && document.querySelector("input.bareme_action") !== null ? document.querySelector("input.bareme_action") : false;
var frais_action_input = document.querySelector("input.frais_action") !== 'undefined' && document.querySelector("input.frais_action") !== null ? document.querySelector("input.frais_action") : false;
var frais_déplacement_action_input = document.querySelector("input.frais_déplacement_action") !== 'undefined' && document.querySelector("input.frais_déplacement_action") !== null ? document.querySelector("input.frais_déplacement_action") : false;
var payement_action_input = document.querySelector("input.payement_action") !== 'undefined' && document.querySelector("input.payement_action") !== null ? document.querySelector("input.payement_action") : false;
var valorisation_action_input = document.querySelector("input.valorisation_action") !== 'undefined' && document.querySelector("input.valorisation_action") !== null ? document.querySelector("input.valorisation_action") : false;
var don_action_input = document.querySelector("input.don_action") !== 'undefined' && document.querySelector("input.don_action") !== null ? document.querySelector("input.don_action") : false; // ########## <SMALL> ##########
// home

var login_error = document.querySelector("small.login") !== 'undefined' && document.querySelector("small.login") !== null ? document.querySelector("small.login") : false;
var password_error = document.querySelector("small.password") !== 'undefined' && document.querySelector("small.password") !== null ? document.querySelector("small.password") : false; // register_customer

var lastname_user_error = document.querySelector("small.lastname_user") !== 'undefined' && document.querySelector("small.lastname_user") !== null ? document.querySelector("small.lastname_user") : false;
var firstname_user_error = document.querySelector("small.firstname_user") !== 'undefined' && document.querySelector("small.firstname_user") !== null ? document.querySelector("small.firstname_user") : false;
var city_user_error = document.querySelector("small.city_user") !== 'undefined' && document.querySelector("small.city_user") !== null ? document.querySelector("small.city_user") : false;
var tel_user_error = document.querySelector("small.tel_user") !== 'undefined' && document.querySelector("small.tel_user") !== null ? document.querySelector("small.tel_user") : false;
var email_user_error = document.querySelector("small.email_user") !== 'undefined' && document.querySelector("small.email_user") !== null ? document.querySelector("small.email_user") : false;
var password_user_error = document.querySelector("small.password_user") !== 'undefined' && document.querySelector("small.password_user") !== null ? document.querySelector("small.password_user") : false;
var password_confirm_user_error = document.querySelector("small.password_confirm_user") !== 'undefined' && document.querySelector("small.password_confirm_user") !== null ? document.querySelector("small.password_confirm_user") : false; // register_assoc

var name_assoc_error = document.querySelector("small.name_assoc") !== 'undefined' && document.querySelector("small.name_assoc") !== null ? document.querySelector("small.name_assoc") : false;
var siret_assoc_error = document.querySelector("small.siret_assoc") !== 'undefined' && document.querySelector("small.siret_assoc") !== null ? document.querySelector("small.siret_assoc") : false;
var adress_street_assoc_error = document.querySelector("small.adress_street_assoc") !== 'undefined' && document.querySelector("small.adress_street_assoc") !== null ? document.querySelector("small.adress_street_assoc") : false;
var adress_cp_assoc_error = document.querySelector("small.adress_cp_assoc") !== 'undefined' && document.querySelector("small.adress_cp_assoc") !== null ? document.querySelector("small.adress_cp_assoc") : false;
var adress_city_assoc_error = document.querySelector("small.adress_city_assoc") !== 'undefined' && document.querySelector("small.adress_city_assoc") !== null ? document.querySelector("small.adress_city_assoc") : false;
var manager_lastname_assoc_error = document.querySelector("small.manager_lastname_assoc") !== 'undefined' && document.querySelector("small.manager_lastname_assoc") !== null ? document.querySelector("small.manager_lastname_assoc") : false;
var manager_firstname_assoc_error = document.querySelector("small.manager_firstname_assoc") !== 'undefined' && document.querySelector("small.manager_firstname_assoc") !== null ? document.querySelector("small.manager_firstname_assoc") : false;
var manager_tel_assoc_error = document.querySelector("small.manager_tel_assoc") !== 'undefined' && document.querySelector("small.manager_tel_assoc") !== null ? document.querySelector("small.manager_tel_assoc") : false;
var manager_email_assoc_error = document.querySelector("small.manager_email_assoc") !== 'undefined' && document.querySelector("small.manager_email_assoc") !== null ? document.querySelector("small.manager_email_assoc") : false; // var discipline_assoc_error = (document.querySelector("small.discipline_assoc")!=='undefined' && document.querySelector("small.discipline_assoc")!==null) 
//     ? document.querySelector("small.discipline_assoc") 
//         : false;
// action

var date_action_error = document.querySelector("small.date_action") !== 'undefined' && document.querySelector("small.date_action") !== null ? document.querySelector("small.date_action") : false;
var nature_action_error = document.querySelector("small.nature_action") !== 'undefined' && document.querySelector("small.nature_action") !== null ? document.querySelector("small.nature_action") : false;
var km_action_error = document.querySelector("small.km_action") !== 'undefined' && document.querySelector("small.km_action") !== null ? document.querySelector("small.km_action") : false;
var time_start_action_error = document.querySelector("small.time_start_action") !== 'undefined' && document.querySelector("small.time_start_action") !== null ? document.querySelector("small.time_start_action") : false;
var time_end_action_error = document.querySelector("small.time_end_action") !== 'undefined' && document.querySelector("small.time_end_action") !== null ? document.querySelector("small.time_end_action") : false;
var duration_action_error = document.querySelector("small.duration_action") !== 'undefined' && document.querySelector("small.duration_action") !== null ? document.querySelector("small.duration_action") : false;
var groupe_classification_action_error = document.querySelector("small.groupe_classification_action") !== 'undefined' && document.querySelector("small.groupe_classification_action") !== null ? document.querySelector("small.groupe_classification_action") : false;
var frais_horaires_action_error = document.querySelector("small.frais_horaires_action") !== 'undefined' && document.querySelector("small.frais_horaires_action") !== null ? document.querySelector("small.frais_horaires_action") : false;
var frais_km_action_error = document.querySelector("small.frais_km_action") !== 'undefined' && document.querySelector("small.frais_km_action") !== null ? document.querySelector("small.frais_km_action") : false;
var other_cost_action_error = document.querySelector("small.other_cost_action") !== 'undefined' && document.querySelector("small.other_cost_action") !== null ? document.querySelector("small.other_cost_action") : false;
var bareme_action_error = document.querySelector("small.bareme_action") !== 'undefined' && document.querySelector("small.bareme_action") !== null ? document.querySelector("small.bareme_action") : false;
var frais_action_error = document.querySelector("small.frais_action") !== 'undefined' && document.querySelector("small.frais_action") !== null ? document.querySelector("small.frais_action") : false;
var frais_déplacement_action_error = document.querySelector("small.frais_déplacement_action") !== 'undefined' && document.querySelector("small.frais_déplacement_action") !== null ? document.querySelector("small.frais_déplacement_action") : false;
var payement_action_error = document.querySelector("small.payement_action") !== 'undefined' && document.querySelector("small.payement_action") !== null ? document.querySelector("small.payement_action") : false;
var valorisation_action_error = document.querySelector("small.valorisation_action") !== 'undefined' && document.querySelector("small.valorisation_action") !== null ? document.querySelector("small.valorisation_action") : false;
var don_action_error = document.querySelector("small.don_action") !== 'undefined' && document.querySelector("small.don_action") !== null ? document.querySelector("small.don_action") : false; // ########## <CHECKBOX> ##########

var password_user_show = document.querySelector("input.password_user_show") !== 'undefined' && document.querySelector("input.password_user_show") !== null ? document.querySelector("input.password_user_show") : false; // var password_show_assoc = (document.querySelector("input.password_show_assoc")!=='undefined' && document.querySelector("input.password_show_assoc")!==null) 
//     ? document.querySelector("input.password_show_assoc") 
//         : false;
// ########## <OTHER> ##########

var body = document.querySelector("body") !== 'undefined' && document.querySelector("body") !== null ? document.querySelector("body") : false; // ###################################################
// #################### NODE DATA ####################
// ###################################################

var debug = true;
var domData = {
  'home': {
    'login': {
      'node': login_input,
      'error_name': 'login_error',
      'error_node': login_error,
      'text': 'Identifiant incorrect',
      'has_error': false
    },
    'password': {
      'node': password_input,
      'error_name': 'password_error',
      'error_node': password_error,
      'text': 'Mot de passe incorrect',
      'has_error': false
    },
    'password_show': {
      password_show: password_show
    },
    'password_show_edit': {
      password_show_edit: password_show_edit
    }
  },
  'register_customer': {
    'lastname_user': {
      'node': lastname_user_input,
      'error_name': 'lastname_user_error',
      'error_node': lastname_user_error,
      'text': 'Format invalide',
      'has_error': false
    },
    'firstname_user': {
      'node': firstname_user_input,
      'error_name': 'firstname_user_error',
      'error_node': firstname_user_error,
      'text': 'Format invalide',
      'has_error': false
    },
    'city_user': {
      'node': city_user_input,
      'error_name': 'city_user_error',
      'error_node': city_user_error,
      'text': 'Format invalide',
      'has_error': false
    },
    'tel_user': {
      'node': tel_user_input,
      'error_name': 'tel_user_error',
      'error_node': tel_user_error,
      'text': 'Téléphone invalide',
      'has_error': false
    },
    'email_user': {
      'node': email_user_input,
      'error_name': 'email_user_error',
      'error_node': email_user_error,
      'text': 'Email invalide',
      'has_error': false
    },
    'password_user': {
      'node': password_user_input,
      'error_name': 'password_user_error',
      'error_node': password_user_error,
      'text': 'Mot de passe invalide',
      'has_error': false
    },
    'password_confirm_user': {
      'node': password_confirm_user_input,
      'error_name': 'password_confirm_user_error',
      'error_node': password_confirm_user_error,
      'text': 'Mots de passe non identique',
      'has_error': false
    },
    'password_user_show': {
      'node': password_user_show
    }
  },
  'register_assoc': {
    'lastname_user': {
      'node': lastname_user_input,
      'error_name': 'lastname_user_error',
      'error_node': lastname_user_error,
      'text': 'Format invalide',
      'has_error': false
    },
    'firstname_user': {
      'node': firstname_user_input,
      'error_name': 'firstname_user_error',
      'error_node': firstname_user_error,
      'text': 'Format invalide',
      'has_error': false
    },
    'city_user': {
      'node': city_user_input,
      'error_name': 'city_user_error',
      'error_node': city_user_error,
      'text': 'Format invalide',
      'has_error': false
    },
    'tel_user': {
      'node': tel_user_input,
      'error_name': 'tel_user_error',
      'error_node': tel_user_error,
      'text': 'Téléphone invalide',
      'has_error': false
    },
    'email_user': {
      'node': email_user_input,
      'error_name': 'email_user_error',
      'error_node': email_user_error,
      'text': 'Email invalide',
      'has_error': false
    },
    'password_user': {
      'node': password_user_input,
      'error_name': 'password_user_error',
      'error_node': password_user_error,
      'text': 'Mot de passe invalide',
      'has_error': false
    },
    'password_confirm_user': {
      'node': password_confirm_user_input,
      'error_name': 'password_confirm_user_error',
      'error_node': password_confirm_user_error,
      'text': 'Mots de passe non identique',
      'has_error': false
    },
    'password_user_show': {
      'node': password_user_show
    },
    'name_assoc': {
      'node': name_assoc_input,
      'error_name': 'name_assoc_error',
      'error_node': name_assoc_error,
      'text': 'Format invalide',
      'has_error': false
    },
    'siret_assoc': {
      'node': siret_assoc_input,
      'error_name': 'siret_assoc_error',
      'error_node': siret_assoc_error,
      'text': 'Siret invalide',
      'has_error': false
    },
    'adress_street_assoc': {
      'node': adress_street_assoc_input,
      'error_name': 'adress_street_assoc_error',
      'error_node': adress_street_assoc_error,
      'text': 'Format invalide',
      'has_error': false
    },
    'adress_cp_assoc': {
      'node': adress_cp_assoc_input,
      'error_name': 'adress_cp_assoc_error',
      'error_node': adress_cp_assoc_error,
      'text': 'Code postal invalide',
      'has_error': false
    },
    'adress_city_assoc': {
      'node': adress_city_assoc_input,
      'error_name': 'adress_city_assoc_error',
      'error_node': adress_city_assoc_error,
      'text': 'Format invalide',
      'has_error': false
    },
    'manager_lastname_assoc': {
      'node': manager_lastname_assoc_input,
      'error_name': 'manager_lastname_assoc_error',
      'error_node': manager_lastname_assoc_error,
      'text': 'Format invalide',
      'has_error': false
    },
    'manager_firstname_assoc': {
      'node': manager_firstname_assoc_input,
      'error_name': 'manager_firstname_assoc_error',
      'error_node': manager_firstname_assoc_error,
      'text': 'Format invalide',
      'has_error': false
    },
    'manager_tel_assoc': {
      'node': manager_tel_assoc_input,
      'error_name': 'manager_tel_assoc_error',
      'error_node': manager_tel_assoc_error,
      'text': 'Téléphone invalide',
      'has_error': false
    },
    'manager_email_assoc': {
      'node': manager_email_assoc_input,
      'error_name': 'manager_email_assoc_error',
      'error_node': manager_email_assoc_error,
      'text': 'Email invalide',
      'has_error': false
    },
    'discipline_assoc': {
      'node': discipline_assoc_input,
      'error_name': null,
      'error_node': null
    }
  },
  'action': {
    'date_action': {
      'node': date_action_input,
      'error_name': 'date_action_error',
      'error_node': date_action_error,
      'text': 'Format invalide',
      'has_error': false
    },
    'nature_action': {
      'node': nature_action_input,
      'error_name': 'nature_action_error',
      'error_node': nature_action_error,
      'text': 'Format invalide',
      'has_error': false
    },
    'km_action': {
      'node': km_action_input,
      'error_name': 'km_action_error',
      'error_node': km_action_error,
      'text': 'Format invalide',
      'has_error': false
    },
    'time_start_action': {
      'node': time_start_action_input,
      'error_name': 'time_start_action_error',
      'error_node': time_start_action_error,
      'text': 'Format invalide',
      'has_error': false
    },
    'time_end_action': {
      'node': time_end_action_input,
      'error_name': 'time_end_action_error',
      'error_node': time_end_action_error,
      'text': 'Format invalide',
      'has_error': false
    },
    'duration_action': {
      'node': duration_action_input,
      'error_name': 'duration_action_error',
      'error_node': duration_action_error,
      'text': 'Format invalide',
      'has_error': false
    },
    'groupe_classification_action': {
      'node': groupe_classification_action_input,
      'error_name': 'groupe_classification_action_error',
      'error_node': groupe_classification_action_error,
      'text': 'Format invalide',
      'has_error': false
    },
    'frais_horaires_action': {
      'node': frais_horaires_action_input,
      'error_name': 'frais_horaires_action_error',
      'error_node': frais_horaires_action_error,
      'text': 'Format invalide',
      'has_error': false
    },
    'frais_km_action': {
      'node': frais_km_action_input,
      'error_name': 'frais_km_action_error',
      'error_node': frais_km_action_error,
      'text': 'Format invalide',
      'has_error': false
    },
    'other_cost_action': {
      'node': other_cost_action_input,
      'error_name': 'other_cost_action_error',
      'error_node': other_cost_action_error,
      'text': 'Format invalide',
      'has_error': false
    },
    'bareme_action': {
      'node': bareme_action_input,
      'error_name': 'bareme_action_error',
      'error_node': bareme_action_error,
      'text': 'Format invalide',
      'has_error': false
    },
    'frais_action': {
      'node': frais_action_input,
      'error_name': 'frais_action_error',
      'error_node': frais_action_error,
      'text': 'Format invalide',
      'has_error': false
    },
    'frais_deplacement_action': {
      'node': frais_deplacement_action_input,
      'error_name': 'frais_deplacement_action_error',
      'error_node': frais_deplacement_action_error,
      'text': 'Format invalide',
      'has_error': false
    },
    'payement_action': {
      'node': payement_action_input,
      'error_name': 'payement_action_error',
      'error_node': payement_action_error,
      'text': 'Format invalide',
      'has_error': false
    },
    'valorisation_action': {
      'node': valorisation_action_input,
      'error_name': 'valorisation_action_error',
      'error_node': valorisation_action_error,
      'text': 'Format invalide',
      'has_error': false
    },
    'don_action': {
      'node': don_action_input,
      'error_name': 'don_action_error',
      'error_node': don_action_error,
      'text': 'Format invalide',
      'has_error': false
    }
  }
};
console.log('pfff');

if (debug === true) {
  console.log(domData);
} // #######################################################
// #################### EVENTLISTENER ####################
// #######################################################
// #################### HOME ####################


if (body.id === "home") {
  // blur
  login_input.addEventListener('blur', loginManager, true);
  password_input.addEventListener('blur', loginManager, true); // focus

  login_input.addEventListener('focus', loginManager, true);
  password_input.addEventListener('focus', loginManager, true); // click

  password_show.addEventListener('click', passwordViewer, true); // submit

  document.addEventListener('submit', loginManager, true);
} // #################### REGISTER customer ####################


if (body.id === 'register_customer' || body.id === 'register_assoc') {
  // blur
  lastname_user_input.addEventListener('blur', customerManager, true);
  firstname_user_input.addEventListener('blur', customerManager, true);
  city_user_input.addEventListener('blur', customerManager, true);
  tel_user_input.addEventListener('blur', customerManager, true);
  email_user_input.addEventListener('blur', customerManager, true);
  password_user_input.addEventListener('blur', customerManager, true);
  password_confirm_user_input.addEventListener('blur', customerManager, true); // focus

  lastname_user_input.addEventListener('focus', customerManager, true);
  firstname_user_input.addEventListener('focus', customerManager, true);
  city_user_input.addEventListener('focus', customerManager, true);
  tel_user_input.addEventListener('focus', customerManager, true);
  email_user_input.addEventListener('focus', customerManager, true);
  password_user_input.addEventListener('focus', customerManager, true);
  password_confirm_user_input.addEventListener('focus', customerManager, true); // click

  password_show.addEventListener('click', passwordViewer, true); // submit

  document.addEventListener('submit', customerManager, true);
} // #################### REGISTER ASSOC ####################


if (body.id === 'register_assoc') {
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
  discipline_assoc_input.addEventListener('blur', assocManager, true); // focus

  name_assoc_input.addEventListener('focus', assocManager, true);
  siret_assoc_input.addEventListener('focus', assocManager, true);
  adress_street_assoc_input.addEventListener('focus', assocManager, true);
  adress_cp_assoc_input.addEventListener('focus', assocManager, true);
  adress_city_assoc_input.addEventListener('focus', assocManager, true);
  manager_lastname_assoc_input.addEventListener('focus', assocManager, true);
  manager_firstname_assoc_input.addEventListener('focus', assocManager, true);
  manager_tel_assoc_input.addEventListener('focus', assocManager, true);
  manager_email_assoc_input.addEventListener('focus', assocManager, true);
  discipline_assoc_input.addEventListener('focus', assocManager, true); // click

  password_show_assoc.addEventListener('click', passwordViewer, true); // change

  discipline_assoc_input.addEventListener('focus', assocManager, true); // submit

  document.addEventListener('submit', assocManager, true);
} // action


if (body.id === "action") {
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
  don_action_input.addEventListener('blur', actionManager, true); // focus

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
  don_action_input.addEventListener('focus', actionManager, true); // submit

  document.addEventListener('submit', actionManager, true);
} // ######################################################
// #################### EVENTMANAGER ####################
// ######################################################


function loginManager() {
  switch (event.type) {
    case 'blur':
      switch (event.target.className) {
        case 'login':
          isValidEmail(login_input.value) ? valid(login_input) : unvalid(login_input);
          break;

        case 'password':
          isValidPassword(password_input.value) ? valid(password_input) : unvalid(password_input);
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

    default:
      throw new Error('Event type not found');
  }
}

function customerManager() {
  switch (event.type) {
    case 'blur':
      switch (event.target.className) {
        case 'lastname_user':
          isValidString(lastname_user_input.value) ? valid(lastname_user_input) : unvalid(lastname_user_input);
          break;

        case 'firstname_user':
          isValidString(firstname_user_input.value) ? valid(firstname_user_input) : unvalid(firstname_user_input);
          break;

        case 'city_user':
          isValidString(city_user_input.value) ? valid(city_user_input) : unvalid(city_user_input);
          break;

        case 'tel_user':
          isValidTel(tel_user_input.value) ? valid(tel_user_input) : unvalid(tel_user_input);
          break;

        case 'email_user':
          isValidEmail(email_user_input.value) ? valid(email_user_input) : unvalid(email_user_input);
          break;

        case 'password_user':
          isValidPassword(password_user_input.value) ? valid(password_user_input) : unvalid(password_user_input);
          break;

        case 'password_confirm_user':
          password_confirm_user_input.value === password_user_input.value ? valid(password_confirm_user_input) : unvalid(password_confirm_user_input);
          break;

        default:
          console.log('The event <' + event + '> can\'t match the classname <' + event.target.className + '>');
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

    default:
      throw new Error('Event type not found');
  }
}

function assocManager() {
  switch (event.type) {
    case 'blur':
      switch (event.target.className) {
        case 'name_assoc':
          isValidString(name_assoc_input.value) ? valid(name_assoc_input) : unvalid(name_assoc_input);
          break;

        case 'siret_assoc':
          isValidSiret(siret_assoc_input.value) ? valid(siret_assoc_input) : unvalid(siret_assoc_input);
          break;

        case 'adress_street_assoc':
          isValidString(adress_street_assoc_input.value) ? valid(adress_street_assoc_input) : unvalid(adress_street_assoc_input);
          break;

        case 'adress_cp_assoc':
          isValidCp(adress_cp_assoc_input.value) ? valid(adress_cp_assoc_input) : unvalid(adress_cp_assoc_input);
          break;

        case 'adress_city_assoc':
          isValidString(adress_city_assoc_input.value) ? valid(adress_city_assoc_input) : unvalid(adress_city_assoc_input);
          break;

        case 'manager_lastname_assoc':
          isValidString(manager_lastname_assoc_input.value) ? valid(manager_lastname_assoc_input) : unvalid(manager_lastname_assoc_input);
          break;

        case 'manager_firstname_assoc':
          isValidString(manager_firstname_assoc_input.value) ? valid(manager_firstname_assoc_input) : unvalid(manager_firstname_assoc_input);
          break;

        case 'manager_tel_assoc':
          isValidTel(manager_tel_assoc_input.value) ? valid(manager_tel_assoc_input) : unvalid(manager_tel_assoc_input);
          break;

        case 'manager_email_assoc':
          isValidEmail(manager_email_assoc_input.value) ? valid(manager_email_assoc_input) : unvalid(manager_email_assoc_input);
          break;

        case 'discipline_assoc':
          isValidDiscipline(discipline_assoc_input) ? valid(discipline_assoc_input) : unvalid(discipline_assoc_input, false);
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

    default:
      throw new Error('Event type not found');
  }
}

function actionManager() {
  switch (event.type) {
    case 'blur':
      switch (event.target.className) {
        case 'date_action':
          isValidDate(date_action_input.value) ? valid(date_action_input) : unvalid(date_action_input);
          break;

        case 'nature_action':
          isValidString(nature_action_input.value) ? valid(nature_action_input) : unvalid(nature_action_input);
          break;

        case 'km_action':
          isValidString(km_action_input.value) ? valid(km_action_input) : unvalid(km_action_input);
          break;

        case 'time_start_action':
          isValidInject(time_start_action_input.value) ? valid(time_start_action_input) : unvalid(time_start_action_input);
          break;

        case 'time_end_action':
          isValidInject(time_end_action_input.value) ? valid(time_end_action_input) : unvalid(time_end_action_input);
          break;

        case 'duration_action':
          isValidInject(duration_action_input.value) ? valid(duration_action_input) : unvalid(duration_action_input);
          break;

        case 'groupe_classification_action':
          isValidInject(groupe_classification_action_input.value) ? valid(groupe_classification_action_input) : unvalid(groupe_classification_action_input);
          break;

        case 'frais_horaires_action':
          isValidInject(frais_horaires_action_input.value) ? valid(frais_horaires_action_input) : unvalid(frais_horaires_action_input);
          break;

        case 'frais_km_action':
          isValidNumber(frais_km_action_input.value) ? valid(frais_km_action_input) : unvalid(frais_km_action_input);
          break;

        case 'other_cost_action':
          isValidString(other_cost_action_input.value) ? valid(other_cost_action_input) : unvalid(other_cost_action_input);
          break;

        case 'bareme_action':
          isValidString(bareme_action_input.value) ? valid(bareme_action_input) : unvalid(bareme_action_input);
          break;

        case 'frais_action':
          isValidInject(frais_action_input.value) ? valid(frais_action_input) : unvalid(frais_action_input);
          break;

        case 'frais_deplacement_action':
          isValidInject(frais_deplacement_action_input.value) ? valid(frais_deplacement_action_input) : unvalid(frais_deplacement_action_input);
          break;

        case 'payement_action':
          isValidNumber(payement_action_input.value) ? valid(payement_action_input) : unvalid(payement_action_input);
          break;

        case 'valorisation_action':
          isValidInject(valorisation_action_input.value) ? valid(valorisation_action_input) : unvalid(valorisation_action_input);
          break;

        case 'don_action':
          isValidInject(don_action_input.value) ? valid(don_action_input) : unvalid(don_action_input);
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

    default:
      throw new Error('Event type not found');
  }
}

function passwordViewer() {
  switch (body.id) {
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

  function toggleView(node) {
    switch (node.type) {
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
  var errorCount = 0;

  for (var node in domData[body.id]) {
    if (node['has_error']) {
      errorCount++;
    }
  }

  if (errorCount === 0) {
    var form = document.querySelector("form") !== 'undefined' && document.querySelector("form") !== null ? document.querySelector("form") : false;

    if (form) {
      form.submit();
    } else {
      throw new Error('submit node not found');
    }
  }
} // ##################################################
// #################### FUNCTION ####################
// ##################################################


function valid(node) {
  // OK style
  node.classList.add("valid"); // save in domData a !error

  domData[body.id][node.classList[0]]['has_error'] = false;
}

function unvalid(node) {
  var canError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  // NOK style
  node.classList.add("unvalid"); // save in domData a error

  domData[body.id][node.classList[0]]['has_error'] = true; // edit error field content

  if (canError === true) {
    domData[body.id][node.classList[0]]['error_node'].innerHTML = domData[body.id][node.classList[0]]['text'];
  }
}

function resetValid(node) {
  var canError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  // apply conditional style
  if (node.classList.contains("valid")) {
    node.classList.remove("valid");
  }

  if (node.classList.contains("unvalid")) {
    node.classList.remove("unvalid");
  } // reset in domData a error


  domData[body.id][node.classList[0]]['has_error'] = false; // clean error field

  if (canError === true) {
    domData[body.id][node.classList[0]]['error_node'].innerHTML = '';
  }
}

function isValidString(field) {
  return field.length >= 3 && field.length <= 45 ? true : false;
}

function isValidEmail(field) {
  var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
  return regex.test(field);
}

function isValidTel(field) {
  var regex = /^(?:0|\(?\+33\)?\s?|0033\s?)[1-79](?:[\.\-\s]?\d\d){4}$/;
  return regex.test(field);
}

function isValidSiret(field) {
  var regex = /^[0-9A-Z]{14}$/;
  return regex.test(field);
}

function isValidCp(field) {
  var regex = /^[0-9]{5}$/;
  return regex.test(field);
}

function isValidPassword(field) {
  var regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{6,15})$/;
  return regex.test(field);
}

function isValidDiscipline(field) {
  return field.value != 0 ? true : false;
}

function isValidNumber(field) {
  var regex = /^[0-9]$/;
  return regex.test(field);
} // ####################################################
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

/***/ })

},[["./assets/js/base.js","runtime"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYmFzZS5qcyJdLCJuYW1lcyI6WyJsb2dpbl9pbnB1dCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBhc3N3b3JkX2lucHV0IiwicGFzc3dvcmRfc2hvdyIsInBhc3N3b3JkX3Nob3dfZWRpdCIsImxhc3RuYW1lX3VzZXJfaW5wdXQiLCJmaXJzdG5hbWVfdXNlcl9pbnB1dCIsImNpdHlfdXNlcl9pbnB1dCIsInRlbF91c2VyX2lucHV0IiwiZW1haWxfdXNlcl9pbnB1dCIsInBhc3N3b3JkX3VzZXJfaW5wdXQiLCJwYXNzd29yZF9jb25maXJtX3VzZXJfaW5wdXQiLCJuYW1lX2Fzc29jX2lucHV0Iiwic2lyZXRfYXNzb2NfaW5wdXQiLCJhZHJlc3Nfc3RyZWV0X2Fzc29jX2lucHV0IiwiYWRyZXNzX2NwX2Fzc29jX2lucHV0IiwiYWRyZXNzX2NpdHlfYXNzb2NfaW5wdXQiLCJtYW5hZ2VyX2xhc3RuYW1lX2Fzc29jX2lucHV0IiwibWFuYWdlcl9maXJzdG5hbWVfYXNzb2NfaW5wdXQiLCJtYW5hZ2VyX3RlbF9hc3NvY19pbnB1dCIsIm1hbmFnZXJfZW1haWxfYXNzb2NfaW5wdXQiLCJkaXNjaXBsaW5lX2Fzc29jX2lucHV0IiwiZGF0ZV9hY3Rpb25faW5wdXQiLCJuYXR1cmVfYWN0aW9uX2lucHV0Iiwia21fYWN0aW9uX2lucHV0IiwidGltZV9zdGFydF9hY3Rpb25faW5wdXQiLCJ0aW1lX2VuZF9hY3Rpb25faW5wdXQiLCJkdXJhdGlvbl9hY3Rpb25faW5wdXQiLCJncm91cGVfY2xhc3NpZmljYXRpb25fYWN0aW9uX2lucHV0IiwiZnJhaXNfaG9yYWlyZXNfYWN0aW9uX2lucHV0IiwiZnJhaXNfa21fYWN0aW9uX2lucHV0Iiwib3RoZXJfY29zdF9hY3Rpb25faW5wdXQiLCJiYXJlbWVfYWN0aW9uX2lucHV0IiwiZnJhaXNfYWN0aW9uX2lucHV0IiwiZnJhaXNfZMOpcGxhY2VtZW50X2FjdGlvbl9pbnB1dCIsInBheWVtZW50X2FjdGlvbl9pbnB1dCIsInZhbG9yaXNhdGlvbl9hY3Rpb25faW5wdXQiLCJkb25fYWN0aW9uX2lucHV0IiwibG9naW5fZXJyb3IiLCJwYXNzd29yZF9lcnJvciIsImxhc3RuYW1lX3VzZXJfZXJyb3IiLCJmaXJzdG5hbWVfdXNlcl9lcnJvciIsImNpdHlfdXNlcl9lcnJvciIsInRlbF91c2VyX2Vycm9yIiwiZW1haWxfdXNlcl9lcnJvciIsInBhc3N3b3JkX3VzZXJfZXJyb3IiLCJwYXNzd29yZF9jb25maXJtX3VzZXJfZXJyb3IiLCJuYW1lX2Fzc29jX2Vycm9yIiwic2lyZXRfYXNzb2NfZXJyb3IiLCJhZHJlc3Nfc3RyZWV0X2Fzc29jX2Vycm9yIiwiYWRyZXNzX2NwX2Fzc29jX2Vycm9yIiwiYWRyZXNzX2NpdHlfYXNzb2NfZXJyb3IiLCJtYW5hZ2VyX2xhc3RuYW1lX2Fzc29jX2Vycm9yIiwibWFuYWdlcl9maXJzdG5hbWVfYXNzb2NfZXJyb3IiLCJtYW5hZ2VyX3RlbF9hc3NvY19lcnJvciIsIm1hbmFnZXJfZW1haWxfYXNzb2NfZXJyb3IiLCJkYXRlX2FjdGlvbl9lcnJvciIsIm5hdHVyZV9hY3Rpb25fZXJyb3IiLCJrbV9hY3Rpb25fZXJyb3IiLCJ0aW1lX3N0YXJ0X2FjdGlvbl9lcnJvciIsInRpbWVfZW5kX2FjdGlvbl9lcnJvciIsImR1cmF0aW9uX2FjdGlvbl9lcnJvciIsImdyb3VwZV9jbGFzc2lmaWNhdGlvbl9hY3Rpb25fZXJyb3IiLCJmcmFpc19ob3JhaXJlc19hY3Rpb25fZXJyb3IiLCJmcmFpc19rbV9hY3Rpb25fZXJyb3IiLCJvdGhlcl9jb3N0X2FjdGlvbl9lcnJvciIsImJhcmVtZV9hY3Rpb25fZXJyb3IiLCJmcmFpc19hY3Rpb25fZXJyb3IiLCJmcmFpc19kw6lwbGFjZW1lbnRfYWN0aW9uX2Vycm9yIiwicGF5ZW1lbnRfYWN0aW9uX2Vycm9yIiwidmFsb3Jpc2F0aW9uX2FjdGlvbl9lcnJvciIsImRvbl9hY3Rpb25fZXJyb3IiLCJwYXNzd29yZF91c2VyX3Nob3ciLCJib2R5IiwiZGVidWciLCJkb21EYXRhIiwiZnJhaXNfZGVwbGFjZW1lbnRfYWN0aW9uX2lucHV0IiwiZnJhaXNfZGVwbGFjZW1lbnRfYWN0aW9uX2Vycm9yIiwiY29uc29sZSIsImxvZyIsImlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImxvZ2luTWFuYWdlciIsInBhc3N3b3JkVmlld2VyIiwiY3VzdG9tZXJNYW5hZ2VyIiwiYXNzb2NNYW5hZ2VyIiwicGFzc3dvcmRfc2hvd19hc3NvYyIsImFjdGlvbk1hbmFnZXIiLCJldmVudCIsInR5cGUiLCJ0YXJnZXQiLCJjbGFzc05hbWUiLCJpc1ZhbGlkRW1haWwiLCJ2YWx1ZSIsInZhbGlkIiwidW52YWxpZCIsImlzVmFsaWRQYXNzd29yZCIsInJlc2V0VmFsaWQiLCJzdWJtaXRWYWxpZGF0b3IiLCJFcnJvciIsImlzVmFsaWRTdHJpbmciLCJpc1ZhbGlkVGVsIiwiaXNWYWxpZFNpcmV0IiwiaXNWYWxpZENwIiwiaXNWYWxpZERpc2NpcGxpbmUiLCJjbGFzc0xpc3QiLCJsZW5ndGgiLCJpc1ZhbGlkRGF0ZSIsImlzVmFsaWRJbmplY3QiLCJpc1ZhbGlkTnVtYmVyIiwidG9nZ2xlVmlldyIsInBhc3N3b3JkX2Fzc29jX2lucHV0Iiwibm9kZSIsInN0eWxlIiwiZmlsbCIsImZpbGxPcGFjaXR5IiwicGFnZSIsInByZXZlbnREZWZhdWx0IiwiZXJyb3JDb3VudCIsImZvcm0iLCJzdWJtaXQiLCJhZGQiLCJjYW5FcnJvciIsImlubmVySFRNTCIsImNvbnRhaW5zIiwicmVtb3ZlIiwiZmllbGQiLCJyZWdleCIsInRlc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJQSxXQUFXLEdBQUlDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixhQUF2QixNQUF3QyxXQUF4QyxJQUF1REQsUUFBUSxDQUFDQyxhQUFULENBQXVCLGFBQXZCLE1BQXdDLElBQWhHLEdBQ1pELFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qixh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LEtBQTNCLEVBQ0E7QUFDSSxTQUFPQSxLQUFLLENBQUNqQyxLQUFOLElBQWUsQ0FBZixHQUFtQixJQUFuQixHQUEwQixLQUFqQztBQUNIOztBQUVELFNBQVNnQixhQUFULENBQXVCaUIsS0FBdkIsRUFDQTtBQUNJLE1BQUlDLEtBQUssR0FBRyxTQUFaO0FBQ0EsU0FBT0EsS0FBSyxDQUFDQyxJQUFOLENBQVdGLEtBQVgsQ0FBUDtBQUNILEMsQ0FDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsSSIsImZpbGUiOiJiYXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIFZBUiAjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuLy8gIyMjIyMjIyMjIyA8SU5QVVQ+ICMjIyMjIyMjIyNcclxuLy8gIGhvbWVcclxudmFyIGxvZ2luX2lucHV0ID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dC5sb2dpblwiKSE9PSd1bmRlZmluZWQnICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dC5sb2dpblwiKSE9PW51bGwpIFxyXG4gICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQubG9naW5cIikgXHJcbiAgICAgICAgOiBmYWxzZTtcclxudmFyIHBhc3N3b3JkX2lucHV0ID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dC5wYXNzd29yZFwiKSE9PSd1bmRlZmluZWQnICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dC5wYXNzd29yZFwiKSE9PW51bGwpIFxyXG4gICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQucGFzc3dvcmRcIikgXHJcbiAgICAgICAgOiBmYWxzZTtcclxudmFyIHBhc3N3b3JkX3Nob3cgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInN2Zy5wYXNzd29yZF9zaG93XCIpIT09J3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInN2Zy5wYXNzd29yZF9zaG93XCIpIT09bnVsbCkgXHJcbiAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzdmcucGFzc3dvcmRfc2hvd1wiKSBcclxuICAgICAgICA6IGZhbHNlO1xyXG52YXIgcGFzc3dvcmRfc2hvd19lZGl0ID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzdmcucGFzc3dvcmRfc2hvdz5wYXRoXCIpIT09J3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInN2Zy5wYXNzd29yZF9zaG93PnBhdGhcIikhPT1udWxsKSBcclxuICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInN2Zy5wYXNzd29yZF9zaG93PnBhdGhcIikgXHJcbiAgICAgICAgOiBmYWxzZTtcclxuLy8gcmVnaXN0ZXJfY3VzdG9tZXJcclxudmFyIGxhc3RuYW1lX3VzZXJfaW5wdXQgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0Lmxhc3RuYW1lX3VzZXJcIikhPT0ndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQubGFzdG5hbWVfdXNlclwiKSE9PW51bGwpIFxyXG4gICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQubGFzdG5hbWVfdXNlclwiKSBcclxuICAgICAgICA6IGZhbHNlO1xyXG52YXIgZmlyc3RuYW1lX3VzZXJfaW5wdXQgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0LmZpcnN0bmFtZV91c2VyXCIpIT09J3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0LmZpcnN0bmFtZV91c2VyXCIpIT09bnVsbCkgXHJcbiAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dC5maXJzdG5hbWVfdXNlclwiKSBcclxuICAgICAgICA6IGZhbHNlO1xyXG52YXIgY2l0eV91c2VyX2lucHV0ID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dC5jaXR5X3VzZXJcIikhPT0ndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQuY2l0eV91c2VyXCIpIT09bnVsbCkgXHJcbiAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dC5jaXR5X3VzZXJcIikgXHJcbiAgICAgICAgOiBmYWxzZTtcclxudmFyIHRlbF91c2VyX2lucHV0ID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dC50ZWxfdXNlclwiKSE9PSd1bmRlZmluZWQnICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dC50ZWxfdXNlclwiKSE9PW51bGwpIFxyXG4gICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQudGVsX3VzZXJcIikgXHJcbiAgICAgICAgOiBmYWxzZTtcclxudmFyIGVtYWlsX3VzZXJfaW5wdXQgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0LmVtYWlsX3VzZXJcIikhPT0ndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQuZW1haWxfdXNlclwiKSE9PW51bGwpIFxyXG4gICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQuZW1haWxfdXNlclwiKSBcclxuICAgICAgICA6IGZhbHNlO1xyXG52YXIgcGFzc3dvcmRfdXNlcl9pbnB1dCA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQucGFzc3dvcmRfdXNlclwiKSE9PSd1bmRlZmluZWQnICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dC5wYXNzd29yZF91c2VyXCIpIT09bnVsbCkgXHJcbiAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dC5wYXNzd29yZF91c2VyXCIpIFxyXG4gICAgICAgIDogZmFsc2U7XHJcbnZhciBwYXNzd29yZF9jb25maXJtX3VzZXJfaW5wdXQgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0LnBhc3N3b3JkX2NvbmZpcm1fdXNlclwiKSE9PSd1bmRlZmluZWQnICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dC5wYXNzd29yZF9jb25maXJtX3VzZXJcIikhPT1udWxsKSBcclxuICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0LnBhc3N3b3JkX2NvbmZpcm1fdXNlclwiKSBcclxuICAgICAgICA6IGZhbHNlO1xyXG4vLyByZWdpc3Rlcl9hc3NvY1xyXG52YXIgbmFtZV9hc3NvY19pbnB1dCA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQubmFtZV9hc3NvY1wiKSE9PSd1bmRlZmluZWQnICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dC5uYW1lX2Fzc29jXCIpIT09bnVsbCkgXHJcbiAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dC5uYW1lX2Fzc29jXCIpIFxyXG4gICAgICAgIDogZmFsc2U7XHJcbnZhciBzaXJldF9hc3NvY19pbnB1dCA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQuc2lyZXRfYXNzb2NcIikhPT0ndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQuc2lyZXRfYXNzb2NcIikhPT1udWxsKSBcclxuICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0LnNpcmV0X2Fzc29jXCIpIFxyXG4gICAgICAgIDogZmFsc2U7XHJcbnZhciBhZHJlc3Nfc3RyZWV0X2Fzc29jX2lucHV0ID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dC5hZHJlc3Nfc3RyZWV0X2Fzc29jXCIpIT09J3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0LmFkcmVzc19zdHJlZXRfYXNzb2NcIikhPT1udWxsKSBcclxuICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0LmFkcmVzc19zdHJlZXRfYXNzb2NcIikgXHJcbiAgICAgICAgOiBmYWxzZTtcclxudmFyIGFkcmVzc19jcF9hc3NvY19pbnB1dCA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQuYWRyZXNzX2NwX2Fzc29jXCIpIT09J3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0LmFkcmVzc19jcF9hc3NvY1wiKSE9PW51bGwpIFxyXG4gICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQuYWRyZXNzX2NwX2Fzc29jXCIpIFxyXG4gICAgICAgIDogZmFsc2U7XHJcbnZhciBhZHJlc3NfY2l0eV9hc3NvY19pbnB1dCA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQuYWRyZXNzX2NpdHlfYXNzb2NcIikhPT0ndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQuYWRyZXNzX2NpdHlfYXNzb2NcIikhPT1udWxsKSBcclxuICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0LmFkcmVzc19jaXR5X2Fzc29jXCIpIFxyXG5cclxuICAgICAgICA6IGZhbHNlO1xyXG52YXIgbWFuYWdlcl9sYXN0bmFtZV9hc3NvY19pbnB1dCA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQubWFuYWdlcl9sYXN0bmFtZV9hc3NvY1wiKSE9PSd1bmRlZmluZWQnICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dC5tYW5hZ2VyX2xhc3RuYW1lX2Fzc29jXCIpIT09bnVsbCkgXHJcbiAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dC5tYW5hZ2VyX2xhc3RuYW1lX2Fzc29jXCIpIFxyXG4gICAgICAgIDogZmFsc2U7XHJcbnZhciBtYW5hZ2VyX2ZpcnN0bmFtZV9hc3NvY19pbnB1dCA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQubWFuYWdlcl9maXJzdG5hbWVfYXNzb2NcIikhPT0ndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQubWFuYWdlcl9maXJzdG5hbWVfYXNzb2NcIikhPT1udWxsKSBcclxuICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0Lm1hbmFnZXJfZmlyc3RuYW1lX2Fzc29jXCIpIFxyXG4gICAgICAgIDogZmFsc2U7XHJcbnZhciBtYW5hZ2VyX3RlbF9hc3NvY19pbnB1dCA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQubWFuYWdlcl90ZWxfYXNzb2NcIikhPT0ndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQubWFuYWdlcl90ZWxfYXNzb2NcIikhPT1udWxsKSBcclxuICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0Lm1hbmFnZXJfdGVsX2Fzc29jXCIpIFxyXG4gICAgICAgIDogZmFsc2U7XHJcbnZhciBtYW5hZ2VyX2VtYWlsX2Fzc29jX2lucHV0ID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dC5tYW5hZ2VyX2VtYWlsX2Fzc29jXCIpIT09J3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0Lm1hbmFnZXJfZW1haWxfYXNzb2NcIikhPT1udWxsKSBcclxuICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0Lm1hbmFnZXJfZW1haWxfYXNzb2NcIikgXHJcbiAgICAgICAgOiBmYWxzZTtcclxudmFyIGRpc2NpcGxpbmVfYXNzb2NfaW5wdXQgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNlbGVjdC5kaXNjaXBsaW5lX2Fzc29jXCIpIT09J3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNlbGVjdC5kaXNjaXBsaW5lX2Fzc29jXCIpIT09bnVsbCkgXHJcbiAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWxlY3QuZGlzY2lwbGluZV9hc3NvY1wiKSBcclxuICAgICAgICA6IGZhbHNlO1xyXG4vLyBhY3Rpb25cclxudmFyIGRhdGVfYWN0aW9uX2lucHV0ID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dC5kYXRlX2FjdGlvblwiKSE9PSd1bmRlZmluZWQnICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dC5kYXRlX2FjdGlvblwiKSE9PW51bGwpIFxyXG4gICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQuZGF0ZV9hY3Rpb25cIikgXHJcbiAgICAgICAgOiBmYWxzZTtcclxudmFyIG5hdHVyZV9hY3Rpb25faW5wdXQgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0Lm5hdHVyZV9hY3Rpb25cIikhPT0ndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQubmF0dXJlX2FjdGlvblwiKSE9PW51bGwpIFxyXG4gICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQubmF0dXJlX2FjdGlvblwiKSBcclxuICAgICAgICA6IGZhbHNlO1xyXG52YXIga21fYWN0aW9uX2lucHV0ID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dC5rbV9hY3Rpb25cIikhPT0ndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQua21fYWN0aW9uXCIpIT09bnVsbCkgXHJcbiAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dC5rbV9hY3Rpb25cIikgXHJcbiAgICAgICAgOiBmYWxzZTtcclxudmFyIHRpbWVfc3RhcnRfYWN0aW9uX2lucHV0ID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWxlY3QudGltZV9zdGFydF9hY3Rpb25cIikhPT0ndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2VsZWN0LnRpbWVfc3RhcnRfYWN0aW9uXCIpIT09bnVsbCkgXHJcbiAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWxlY3QudGltZV9zdGFydF9hY3Rpb25cIikgXHJcbiAgICAgICAgOiBmYWxzZTtcclxudmFyIHRpbWVfZW5kX2FjdGlvbl9pbnB1dCA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2VsZWN0LnRpbWVfZW5kX2FjdGlvblwiKSE9PSd1bmRlZmluZWQnICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWxlY3QudGltZV9lbmRfYWN0aW9uXCIpIT09bnVsbCkgXHJcbiAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWxlY3QudGltZV9lbmRfYWN0aW9uXCIpIFxyXG4gICAgICAgIDogZmFsc2U7XHJcbnZhciBkdXJhdGlvbl9hY3Rpb25faW5wdXQgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0LmR1cmF0aW9uX2FjdGlvblwiKSE9PSd1bmRlZmluZWQnICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dC5kdXJhdGlvbl9hY3Rpb25cIikhPT1udWxsKSBcclxuICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0LmR1cmF0aW9uX2FjdGlvblwiKSBcclxuICAgICAgICA6IGZhbHNlO1xyXG52YXIgZ3JvdXBlX2NsYXNzaWZpY2F0aW9uX2FjdGlvbl9pbnB1dCA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2VsZWN0Lmdyb3VwZV9jbGFzc2lmaWNhdGlvbl9hY3Rpb25cIikhPT0ndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2VsZWN0Lmdyb3VwZV9jbGFzc2lmaWNhdGlvbl9hY3Rpb25cIikhPT1udWxsKSBcclxuICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNlbGVjdC5ncm91cGVfY2xhc3NpZmljYXRpb25fYWN0aW9uXCIpIFxyXG4gICAgICAgIDogZmFsc2U7XHJcbnZhciBmcmFpc19ob3JhaXJlc19hY3Rpb25faW5wdXQgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0LmZyYWlzX2hvcmFpcmVzX2FjdGlvblwiKSE9PSd1bmRlZmluZWQnICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dC5mcmFpc19ob3JhaXJlc19hY3Rpb25cIikhPT1udWxsKSBcclxuICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0LmZyYWlzX2hvcmFpcmVzX2FjdGlvblwiKSBcclxuICAgICAgICA6IGZhbHNlO1xyXG52YXIgZnJhaXNfa21fYWN0aW9uX2lucHV0ID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dC5mcmFpc19rbV9hY3Rpb25cIikhPT0ndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQuZnJhaXNfa21fYWN0aW9uXCIpIT09bnVsbCkgXHJcbiAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dC5mcmFpc19rbV9hY3Rpb25cIikgXHJcbiAgICAgICAgOiBmYWxzZTtcclxudmFyIG90aGVyX2Nvc3RfYWN0aW9uX2lucHV0ID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dC5vdGhlcl9jb3N0X2FjdGlvblwiKSE9PSd1bmRlZmluZWQnICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dC5vdGhlcl9jb3N0X2FjdGlvblwiKSE9PW51bGwpIFxyXG4gICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQub3RoZXJfY29zdF9hY3Rpb25cIikgXHJcbiAgICAgICAgOiBmYWxzZTtcclxudmFyIGJhcmVtZV9hY3Rpb25faW5wdXQgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0LmJhcmVtZV9hY3Rpb25cIikhPT0ndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQuYmFyZW1lX2FjdGlvblwiKSE9PW51bGwpIFxyXG4gICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQuYmFyZW1lX2FjdGlvblwiKSBcclxuICAgICAgICA6IGZhbHNlO1xyXG52YXIgZnJhaXNfYWN0aW9uX2lucHV0ID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dC5mcmFpc19hY3Rpb25cIikhPT0ndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQuZnJhaXNfYWN0aW9uXCIpIT09bnVsbCkgXHJcbiAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dC5mcmFpc19hY3Rpb25cIikgXHJcbiAgICAgICAgOiBmYWxzZTtcclxudmFyIGZyYWlzX2TDqXBsYWNlbWVudF9hY3Rpb25faW5wdXQgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0LmZyYWlzX2TDqXBsYWNlbWVudF9hY3Rpb25cIikhPT0ndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQuZnJhaXNfZMOpcGxhY2VtZW50X2FjdGlvblwiKSE9PW51bGwpIFxyXG4gICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQuZnJhaXNfZMOpcGxhY2VtZW50X2FjdGlvblwiKSBcclxuICAgICAgICA6IGZhbHNlO1xyXG52YXIgcGF5ZW1lbnRfYWN0aW9uX2lucHV0ID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dC5wYXllbWVudF9hY3Rpb25cIikhPT0ndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQucGF5ZW1lbnRfYWN0aW9uXCIpIT09bnVsbCkgXHJcbiAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dC5wYXllbWVudF9hY3Rpb25cIikgXHJcbiAgICAgICAgOiBmYWxzZTtcclxudmFyIHZhbG9yaXNhdGlvbl9hY3Rpb25faW5wdXQgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0LnZhbG9yaXNhdGlvbl9hY3Rpb25cIikhPT0ndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQudmFsb3Jpc2F0aW9uX2FjdGlvblwiKSE9PW51bGwpIFxyXG4gICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQudmFsb3Jpc2F0aW9uX2FjdGlvblwiKSBcclxuICAgICAgICA6IGZhbHNlO1xyXG52YXIgZG9uX2FjdGlvbl9pbnB1dCA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQuZG9uX2FjdGlvblwiKSE9PSd1bmRlZmluZWQnICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dC5kb25fYWN0aW9uXCIpIT09bnVsbCkgXHJcbiAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dC5kb25fYWN0aW9uXCIpIFxyXG4gICAgICAgIDogZmFsc2U7XHJcbi8vICMjIyMjIyMjIyMgPFNNQUxMPiAjIyMjIyMjIyMjXHJcbi8vIGhvbWVcclxudmFyIGxvZ2luX2Vycm9yID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzbWFsbC5sb2dpblwiKSE9PSd1bmRlZmluZWQnICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzbWFsbC5sb2dpblwiKSE9PW51bGwpIFxyXG4gICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic21hbGwubG9naW5cIikgXHJcbiAgICAgICAgOiBmYWxzZTtcclxudmFyIHBhc3N3b3JkX2Vycm9yID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzbWFsbC5wYXNzd29yZFwiKSE9PSd1bmRlZmluZWQnICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzbWFsbC5wYXNzd29yZFwiKSE9PW51bGwpIFxyXG4gICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic21hbGwucGFzc3dvcmRcIikgXHJcbiAgICAgICAgOiBmYWxzZTtcclxuLy8gcmVnaXN0ZXJfY3VzdG9tZXJcclxudmFyIGxhc3RuYW1lX3VzZXJfZXJyb3IgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNtYWxsLmxhc3RuYW1lX3VzZXJcIikhPT0ndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic21hbGwubGFzdG5hbWVfdXNlclwiKSE9PW51bGwpIFxyXG4gICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic21hbGwubGFzdG5hbWVfdXNlclwiKSBcclxuICAgICAgICA6IGZhbHNlO1xyXG52YXIgZmlyc3RuYW1lX3VzZXJfZXJyb3IgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNtYWxsLmZpcnN0bmFtZV91c2VyXCIpIT09J3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNtYWxsLmZpcnN0bmFtZV91c2VyXCIpIT09bnVsbCkgXHJcbiAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzbWFsbC5maXJzdG5hbWVfdXNlclwiKSBcclxuICAgICAgICA6IGZhbHNlO1xyXG52YXIgY2l0eV91c2VyX2Vycm9yID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzbWFsbC5jaXR5X3VzZXJcIikhPT0ndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic21hbGwuY2l0eV91c2VyXCIpIT09bnVsbCkgXHJcbiAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzbWFsbC5jaXR5X3VzZXJcIikgXHJcbiAgICAgICAgOiBmYWxzZTtcclxudmFyIHRlbF91c2VyX2Vycm9yID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzbWFsbC50ZWxfdXNlclwiKSE9PSd1bmRlZmluZWQnICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzbWFsbC50ZWxfdXNlclwiKSE9PW51bGwpIFxyXG4gICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic21hbGwudGVsX3VzZXJcIikgXHJcbiAgICAgICAgOiBmYWxzZTtcclxudmFyIGVtYWlsX3VzZXJfZXJyb3IgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNtYWxsLmVtYWlsX3VzZXJcIikhPT0ndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic21hbGwuZW1haWxfdXNlclwiKSE9PW51bGwpIFxyXG4gICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic21hbGwuZW1haWxfdXNlclwiKSBcclxuICAgICAgICA6IGZhbHNlO1xyXG52YXIgcGFzc3dvcmRfdXNlcl9lcnJvciA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic21hbGwucGFzc3dvcmRfdXNlclwiKSE9PSd1bmRlZmluZWQnICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzbWFsbC5wYXNzd29yZF91c2VyXCIpIT09bnVsbCkgXHJcbiAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzbWFsbC5wYXNzd29yZF91c2VyXCIpIFxyXG4gICAgICAgIDogZmFsc2U7XHJcbnZhciBwYXNzd29yZF9jb25maXJtX3VzZXJfZXJyb3IgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNtYWxsLnBhc3N3b3JkX2NvbmZpcm1fdXNlclwiKSE9PSd1bmRlZmluZWQnICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzbWFsbC5wYXNzd29yZF9jb25maXJtX3VzZXJcIikhPT1udWxsKSBcclxuICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNtYWxsLnBhc3N3b3JkX2NvbmZpcm1fdXNlclwiKSBcclxuICAgICAgICA6IGZhbHNlO1xyXG4vLyByZWdpc3Rlcl9hc3NvY1xyXG52YXIgbmFtZV9hc3NvY19lcnJvciA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic21hbGwubmFtZV9hc3NvY1wiKSE9PSd1bmRlZmluZWQnICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzbWFsbC5uYW1lX2Fzc29jXCIpIT09bnVsbCkgXHJcbiAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzbWFsbC5uYW1lX2Fzc29jXCIpIFxyXG4gICAgICAgIDogZmFsc2U7XHJcbnZhciBzaXJldF9hc3NvY19lcnJvciA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic21hbGwuc2lyZXRfYXNzb2NcIikhPT0ndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic21hbGwuc2lyZXRfYXNzb2NcIikhPT1udWxsKSBcclxuICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNtYWxsLnNpcmV0X2Fzc29jXCIpIFxyXG4gICAgICAgIDogZmFsc2U7XHJcbnZhciBhZHJlc3Nfc3RyZWV0X2Fzc29jX2Vycm9yID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzbWFsbC5hZHJlc3Nfc3RyZWV0X2Fzc29jXCIpIT09J3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNtYWxsLmFkcmVzc19zdHJlZXRfYXNzb2NcIikhPT1udWxsKSBcclxuICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNtYWxsLmFkcmVzc19zdHJlZXRfYXNzb2NcIikgXHJcbiAgICAgICAgOiBmYWxzZTtcclxudmFyIGFkcmVzc19jcF9hc3NvY19lcnJvciA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic21hbGwuYWRyZXNzX2NwX2Fzc29jXCIpIT09J3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNtYWxsLmFkcmVzc19jcF9hc3NvY1wiKSE9PW51bGwpIFxyXG4gICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic21hbGwuYWRyZXNzX2NwX2Fzc29jXCIpIFxyXG4gICAgICAgIDogZmFsc2U7XHJcbnZhciBhZHJlc3NfY2l0eV9hc3NvY19lcnJvciA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic21hbGwuYWRyZXNzX2NpdHlfYXNzb2NcIikhPT0ndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic21hbGwuYWRyZXNzX2NpdHlfYXNzb2NcIikhPT1udWxsKSBcclxuICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNtYWxsLmFkcmVzc19jaXR5X2Fzc29jXCIpIFxyXG4gICAgICAgIDogZmFsc2U7XHJcbnZhciBtYW5hZ2VyX2xhc3RuYW1lX2Fzc29jX2Vycm9yID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzbWFsbC5tYW5hZ2VyX2xhc3RuYW1lX2Fzc29jXCIpIT09J3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNtYWxsLm1hbmFnZXJfbGFzdG5hbWVfYXNzb2NcIikhPT1udWxsKSBcclxuICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNtYWxsLm1hbmFnZXJfbGFzdG5hbWVfYXNzb2NcIikgXHJcbiAgICAgICAgOiBmYWxzZTtcclxudmFyIG1hbmFnZXJfZmlyc3RuYW1lX2Fzc29jX2Vycm9yID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzbWFsbC5tYW5hZ2VyX2ZpcnN0bmFtZV9hc3NvY1wiKSE9PSd1bmRlZmluZWQnICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzbWFsbC5tYW5hZ2VyX2ZpcnN0bmFtZV9hc3NvY1wiKSE9PW51bGwpIFxyXG4gICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic21hbGwubWFuYWdlcl9maXJzdG5hbWVfYXNzb2NcIikgXHJcbiAgICAgICAgOiBmYWxzZTtcclxudmFyIG1hbmFnZXJfdGVsX2Fzc29jX2Vycm9yID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzbWFsbC5tYW5hZ2VyX3RlbF9hc3NvY1wiKSE9PSd1bmRlZmluZWQnICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzbWFsbC5tYW5hZ2VyX3RlbF9hc3NvY1wiKSE9PW51bGwpIFxyXG4gICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic21hbGwubWFuYWdlcl90ZWxfYXNzb2NcIikgXHJcbiAgICAgICAgOiBmYWxzZTtcclxudmFyIG1hbmFnZXJfZW1haWxfYXNzb2NfZXJyb3IgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNtYWxsLm1hbmFnZXJfZW1haWxfYXNzb2NcIikhPT0ndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic21hbGwubWFuYWdlcl9lbWFpbF9hc3NvY1wiKSE9PW51bGwpIFxyXG4gICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic21hbGwubWFuYWdlcl9lbWFpbF9hc3NvY1wiKSBcclxuICAgICAgICA6IGZhbHNlO1xyXG4vLyB2YXIgZGlzY2lwbGluZV9hc3NvY19lcnJvciA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic21hbGwuZGlzY2lwbGluZV9hc3NvY1wiKSE9PSd1bmRlZmluZWQnICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzbWFsbC5kaXNjaXBsaW5lX2Fzc29jXCIpIT09bnVsbCkgXHJcbi8vICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzbWFsbC5kaXNjaXBsaW5lX2Fzc29jXCIpIFxyXG4vLyAgICAgICAgIDogZmFsc2U7XHJcbi8vIGFjdGlvblxyXG52YXIgZGF0ZV9hY3Rpb25fZXJyb3IgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNtYWxsLmRhdGVfYWN0aW9uXCIpIT09J3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNtYWxsLmRhdGVfYWN0aW9uXCIpIT09bnVsbCkgXHJcbiAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzbWFsbC5kYXRlX2FjdGlvblwiKSBcclxuICAgICAgICA6IGZhbHNlO1xyXG52YXIgbmF0dXJlX2FjdGlvbl9lcnJvciA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic21hbGwubmF0dXJlX2FjdGlvblwiKSE9PSd1bmRlZmluZWQnICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzbWFsbC5uYXR1cmVfYWN0aW9uXCIpIT09bnVsbCkgXHJcbiAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzbWFsbC5uYXR1cmVfYWN0aW9uXCIpIFxyXG4gICAgICAgIDogZmFsc2U7XHJcbnZhciBrbV9hY3Rpb25fZXJyb3IgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNtYWxsLmttX2FjdGlvblwiKSE9PSd1bmRlZmluZWQnICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzbWFsbC5rbV9hY3Rpb25cIikhPT1udWxsKSBcclxuICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNtYWxsLmttX2FjdGlvblwiKSBcclxuICAgICAgICA6IGZhbHNlO1xyXG52YXIgdGltZV9zdGFydF9hY3Rpb25fZXJyb3IgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNtYWxsLnRpbWVfc3RhcnRfYWN0aW9uXCIpIT09J3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNtYWxsLnRpbWVfc3RhcnRfYWN0aW9uXCIpIT09bnVsbCkgXHJcbiAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzbWFsbC50aW1lX3N0YXJ0X2FjdGlvblwiKSBcclxuICAgICAgICA6IGZhbHNlO1xyXG52YXIgdGltZV9lbmRfYWN0aW9uX2Vycm9yID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzbWFsbC50aW1lX2VuZF9hY3Rpb25cIikhPT0ndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic21hbGwudGltZV9lbmRfYWN0aW9uXCIpIT09bnVsbCkgXHJcbiAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzbWFsbC50aW1lX2VuZF9hY3Rpb25cIikgXHJcbiAgICAgICAgOiBmYWxzZTtcclxudmFyIGR1cmF0aW9uX2FjdGlvbl9lcnJvciA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic21hbGwuZHVyYXRpb25fYWN0aW9uXCIpIT09J3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNtYWxsLmR1cmF0aW9uX2FjdGlvblwiKSE9PW51bGwpIFxyXG4gICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic21hbGwuZHVyYXRpb25fYWN0aW9uXCIpIFxyXG4gICAgICAgIDogZmFsc2U7XHJcbnZhciBncm91cGVfY2xhc3NpZmljYXRpb25fYWN0aW9uX2Vycm9yID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzbWFsbC5ncm91cGVfY2xhc3NpZmljYXRpb25fYWN0aW9uXCIpIT09J3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNtYWxsLmdyb3VwZV9jbGFzc2lmaWNhdGlvbl9hY3Rpb25cIikhPT1udWxsKSBcclxuICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNtYWxsLmdyb3VwZV9jbGFzc2lmaWNhdGlvbl9hY3Rpb25cIikgXHJcbiAgICAgICAgOiBmYWxzZTtcclxudmFyIGZyYWlzX2hvcmFpcmVzX2FjdGlvbl9lcnJvciA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic21hbGwuZnJhaXNfaG9yYWlyZXNfYWN0aW9uXCIpIT09J3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNtYWxsLmZyYWlzX2hvcmFpcmVzX2FjdGlvblwiKSE9PW51bGwpIFxyXG4gICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic21hbGwuZnJhaXNfaG9yYWlyZXNfYWN0aW9uXCIpIFxyXG4gICAgICAgIDogZmFsc2U7XHJcbnZhciBmcmFpc19rbV9hY3Rpb25fZXJyb3IgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNtYWxsLmZyYWlzX2ttX2FjdGlvblwiKSE9PSd1bmRlZmluZWQnICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzbWFsbC5mcmFpc19rbV9hY3Rpb25cIikhPT1udWxsKSBcclxuICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNtYWxsLmZyYWlzX2ttX2FjdGlvblwiKSBcclxuICAgICAgICA6IGZhbHNlO1xyXG52YXIgb3RoZXJfY29zdF9hY3Rpb25fZXJyb3IgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNtYWxsLm90aGVyX2Nvc3RfYWN0aW9uXCIpIT09J3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNtYWxsLm90aGVyX2Nvc3RfYWN0aW9uXCIpIT09bnVsbCkgXHJcbiAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzbWFsbC5vdGhlcl9jb3N0X2FjdGlvblwiKSBcclxuICAgICAgICA6IGZhbHNlO1xyXG52YXIgYmFyZW1lX2FjdGlvbl9lcnJvciA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic21hbGwuYmFyZW1lX2FjdGlvblwiKSE9PSd1bmRlZmluZWQnICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzbWFsbC5iYXJlbWVfYWN0aW9uXCIpIT09bnVsbCkgXHJcbiAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzbWFsbC5iYXJlbWVfYWN0aW9uXCIpIFxyXG4gICAgICAgIDogZmFsc2U7XHJcbnZhciBmcmFpc19hY3Rpb25fZXJyb3IgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNtYWxsLmZyYWlzX2FjdGlvblwiKSE9PSd1bmRlZmluZWQnICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzbWFsbC5mcmFpc19hY3Rpb25cIikhPT1udWxsKSBcclxuICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNtYWxsLmZyYWlzX2FjdGlvblwiKSBcclxuICAgICAgICA6IGZhbHNlO1xyXG52YXIgZnJhaXNfZMOpcGxhY2VtZW50X2FjdGlvbl9lcnJvciA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic21hbGwuZnJhaXNfZMOpcGxhY2VtZW50X2FjdGlvblwiKSE9PSd1bmRlZmluZWQnICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzbWFsbC5mcmFpc19kw6lwbGFjZW1lbnRfYWN0aW9uXCIpIT09bnVsbCkgXHJcbiAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzbWFsbC5mcmFpc19kw6lwbGFjZW1lbnRfYWN0aW9uXCIpIFxyXG4gICAgICAgIDogZmFsc2U7XHJcbnZhciBwYXllbWVudF9hY3Rpb25fZXJyb3IgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNtYWxsLnBheWVtZW50X2FjdGlvblwiKSE9PSd1bmRlZmluZWQnICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzbWFsbC5wYXllbWVudF9hY3Rpb25cIikhPT1udWxsKSBcclxuICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNtYWxsLnBheWVtZW50X2FjdGlvblwiKSBcclxuICAgICAgICA6IGZhbHNlO1xyXG52YXIgdmFsb3Jpc2F0aW9uX2FjdGlvbl9lcnJvciA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic21hbGwudmFsb3Jpc2F0aW9uX2FjdGlvblwiKSE9PSd1bmRlZmluZWQnICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzbWFsbC52YWxvcmlzYXRpb25fYWN0aW9uXCIpIT09bnVsbCkgXHJcbiAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzbWFsbC52YWxvcmlzYXRpb25fYWN0aW9uXCIpIFxyXG4gICAgICAgIDogZmFsc2U7XHJcbnZhciBkb25fYWN0aW9uX2Vycm9yID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzbWFsbC5kb25fYWN0aW9uXCIpIT09J3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNtYWxsLmRvbl9hY3Rpb25cIikhPT1udWxsKSBcclxuICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNtYWxsLmRvbl9hY3Rpb25cIikgXHJcbiAgICAgICAgOiBmYWxzZTtcclxuLy8gIyMjIyMjIyMjIyA8Q0hFQ0tCT1g+ICMjIyMjIyMjIyNcclxudmFyIHBhc3N3b3JkX3VzZXJfc2hvdyA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQucGFzc3dvcmRfdXNlcl9zaG93XCIpIT09J3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0LnBhc3N3b3JkX3VzZXJfc2hvd1wiKSE9PW51bGwpIFxyXG4gICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQucGFzc3dvcmRfdXNlcl9zaG93XCIpIFxyXG4gICAgICAgIDogZmFsc2U7XHJcbi8vIHZhciBwYXNzd29yZF9zaG93X2Fzc29jID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dC5wYXNzd29yZF9zaG93X2Fzc29jXCIpIT09J3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0LnBhc3N3b3JkX3Nob3dfYXNzb2NcIikhPT1udWxsKSBcclxuLy8gICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0LnBhc3N3b3JkX3Nob3dfYXNzb2NcIikgXHJcbi8vICAgICAgICAgOiBmYWxzZTtcclxuLy8gIyMjIyMjIyMjIyA8T1RIRVI+ICMjIyMjIyMjIyNcclxudmFyIGJvZHkgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikhPT0ndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKSE9PW51bGwpIFxyXG4gICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKSBcclxuICAgICAgICA6IGZhbHNlO1xyXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMgTk9ERSBEQVRBICMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG5cclxuY29uc3QgZGVidWcgPSB0cnVlO1xyXG52YXIgZG9tRGF0YSA9IHtcclxuICAgICdob21lJzoge1xyXG4gICAgICAgICdsb2dpbic6IHsnbm9kZSc6IGxvZ2luX2lucHV0LCAnZXJyb3JfbmFtZSc6ICdsb2dpbl9lcnJvcicsICdlcnJvcl9ub2RlJzogbG9naW5fZXJyb3IsICd0ZXh0JzogJ0lkZW50aWZpYW50IGluY29ycmVjdCcsICdoYXNfZXJyb3InOiBmYWxzZX0sXHJcbiAgICAgICAgJ3Bhc3N3b3JkJzogeydub2RlJzogcGFzc3dvcmRfaW5wdXQsICdlcnJvcl9uYW1lJzogJ3Bhc3N3b3JkX2Vycm9yJywgJ2Vycm9yX25vZGUnOiBwYXNzd29yZF9lcnJvciwgJ3RleHQnOiAnTW90IGRlIHBhc3NlIGluY29ycmVjdCcsICdoYXNfZXJyb3InOiBmYWxzZX0sXHJcbiAgICAgICAgJ3Bhc3N3b3JkX3Nob3cnOiB7cGFzc3dvcmRfc2hvd30sXHJcbiAgICAgICAgJ3Bhc3N3b3JkX3Nob3dfZWRpdCc6IHtwYXNzd29yZF9zaG93X2VkaXR9XHJcbiAgICB9LFxyXG4gICAgJ3JlZ2lzdGVyX2N1c3RvbWVyJzoge1xyXG4gICAgICAgICdsYXN0bmFtZV91c2VyJzogeyAnbm9kZSc6IGxhc3RuYW1lX3VzZXJfaW5wdXQsICdlcnJvcl9uYW1lJzogJ2xhc3RuYW1lX3VzZXJfZXJyb3InLCAnZXJyb3Jfbm9kZSc6IGxhc3RuYW1lX3VzZXJfZXJyb3IsICd0ZXh0JzogJ0Zvcm1hdCBpbnZhbGlkZScsICdoYXNfZXJyb3InOiBmYWxzZX0sXHJcbiAgICAgICAgJ2ZpcnN0bmFtZV91c2VyJzogeydub2RlJzogZmlyc3RuYW1lX3VzZXJfaW5wdXQsICdlcnJvcl9uYW1lJzogJ2ZpcnN0bmFtZV91c2VyX2Vycm9yJywgJ2Vycm9yX25vZGUnOiBmaXJzdG5hbWVfdXNlcl9lcnJvciwgJ3RleHQnOiAnRm9ybWF0IGludmFsaWRlJywgJ2hhc19lcnJvcic6IGZhbHNlfSxcclxuICAgICAgICAnY2l0eV91c2VyJzogeydub2RlJzogY2l0eV91c2VyX2lucHV0LCAnZXJyb3JfbmFtZSc6ICdjaXR5X3VzZXJfZXJyb3InLCAnZXJyb3Jfbm9kZSc6IGNpdHlfdXNlcl9lcnJvciwgJ3RleHQnOiAnRm9ybWF0IGludmFsaWRlJywgJ2hhc19lcnJvcic6IGZhbHNlfSxcclxuICAgICAgICAndGVsX3VzZXInOiB7J25vZGUnOiB0ZWxfdXNlcl9pbnB1dCwgJ2Vycm9yX25hbWUnOiAndGVsX3VzZXJfZXJyb3InLCAnZXJyb3Jfbm9kZSc6IHRlbF91c2VyX2Vycm9yLCAndGV4dCc6ICdUw6lsw6lwaG9uZSBpbnZhbGlkZScsICdoYXNfZXJyb3InOiBmYWxzZX0sXHJcbiAgICAgICAgJ2VtYWlsX3VzZXInOiB7J25vZGUnOiBlbWFpbF91c2VyX2lucHV0LCAnZXJyb3JfbmFtZSc6ICdlbWFpbF91c2VyX2Vycm9yJywgJ2Vycm9yX25vZGUnOiBlbWFpbF91c2VyX2Vycm9yLCAndGV4dCc6ICdFbWFpbCBpbnZhbGlkZScsICdoYXNfZXJyb3InOiBmYWxzZX0sXHJcbiAgICAgICAgJ3Bhc3N3b3JkX3VzZXInOiB7J25vZGUnOiBwYXNzd29yZF91c2VyX2lucHV0LCAnZXJyb3JfbmFtZSc6ICdwYXNzd29yZF91c2VyX2Vycm9yJywgJ2Vycm9yX25vZGUnOiBwYXNzd29yZF91c2VyX2Vycm9yLCAndGV4dCc6ICdNb3QgZGUgcGFzc2UgaW52YWxpZGUnLCAnaGFzX2Vycm9yJzogZmFsc2V9LFxyXG4gICAgICAgICdwYXNzd29yZF9jb25maXJtX3VzZXInOiB7J25vZGUnOiBwYXNzd29yZF9jb25maXJtX3VzZXJfaW5wdXQsICdlcnJvcl9uYW1lJzogJ3Bhc3N3b3JkX2NvbmZpcm1fdXNlcl9lcnJvcicsICdlcnJvcl9ub2RlJzogcGFzc3dvcmRfY29uZmlybV91c2VyX2Vycm9yLCAndGV4dCc6ICdNb3RzIGRlIHBhc3NlIG5vbiBpZGVudGlxdWUnLCAnaGFzX2Vycm9yJzogZmFsc2V9LFxyXG4gICAgICAgICdwYXNzd29yZF91c2VyX3Nob3cnOiB7J25vZGUnOiBwYXNzd29yZF91c2VyX3Nob3d9XHJcbiAgICB9LFxyXG4gICAgJ3JlZ2lzdGVyX2Fzc29jJzoge1xyXG4gICAgICAgICdsYXN0bmFtZV91c2VyJzogeyAnbm9kZSc6IGxhc3RuYW1lX3VzZXJfaW5wdXQsICdlcnJvcl9uYW1lJzogJ2xhc3RuYW1lX3VzZXJfZXJyb3InLCAnZXJyb3Jfbm9kZSc6IGxhc3RuYW1lX3VzZXJfZXJyb3IsICd0ZXh0JzogJ0Zvcm1hdCBpbnZhbGlkZScsICdoYXNfZXJyb3InOiBmYWxzZX0sXHJcbiAgICAgICAgJ2ZpcnN0bmFtZV91c2VyJzogeydub2RlJzogZmlyc3RuYW1lX3VzZXJfaW5wdXQsICdlcnJvcl9uYW1lJzogJ2ZpcnN0bmFtZV91c2VyX2Vycm9yJywgJ2Vycm9yX25vZGUnOiBmaXJzdG5hbWVfdXNlcl9lcnJvciwgJ3RleHQnOiAnRm9ybWF0IGludmFsaWRlJywgJ2hhc19lcnJvcic6IGZhbHNlfSxcclxuICAgICAgICAnY2l0eV91c2VyJzogeydub2RlJzogY2l0eV91c2VyX2lucHV0LCAnZXJyb3JfbmFtZSc6ICdjaXR5X3VzZXJfZXJyb3InLCAnZXJyb3Jfbm9kZSc6IGNpdHlfdXNlcl9lcnJvciwgJ3RleHQnOiAnRm9ybWF0IGludmFsaWRlJywgJ2hhc19lcnJvcic6IGZhbHNlfSxcclxuICAgICAgICAndGVsX3VzZXInOiB7J25vZGUnOiB0ZWxfdXNlcl9pbnB1dCwgJ2Vycm9yX25hbWUnOiAndGVsX3VzZXJfZXJyb3InLCAnZXJyb3Jfbm9kZSc6IHRlbF91c2VyX2Vycm9yLCAndGV4dCc6ICdUw6lsw6lwaG9uZSBpbnZhbGlkZScsICdoYXNfZXJyb3InOiBmYWxzZX0sXHJcbiAgICAgICAgJ2VtYWlsX3VzZXInOiB7J25vZGUnOiBlbWFpbF91c2VyX2lucHV0LCAnZXJyb3JfbmFtZSc6ICdlbWFpbF91c2VyX2Vycm9yJywgJ2Vycm9yX25vZGUnOiBlbWFpbF91c2VyX2Vycm9yLCAndGV4dCc6ICdFbWFpbCBpbnZhbGlkZScsICdoYXNfZXJyb3InOiBmYWxzZX0sXHJcbiAgICAgICAgJ3Bhc3N3b3JkX3VzZXInOiB7J25vZGUnOiBwYXNzd29yZF91c2VyX2lucHV0LCAnZXJyb3JfbmFtZSc6ICdwYXNzd29yZF91c2VyX2Vycm9yJywgJ2Vycm9yX25vZGUnOiBwYXNzd29yZF91c2VyX2Vycm9yLCAndGV4dCc6ICdNb3QgZGUgcGFzc2UgaW52YWxpZGUnLCAnaGFzX2Vycm9yJzogZmFsc2V9LFxyXG4gICAgICAgICdwYXNzd29yZF9jb25maXJtX3VzZXInOiB7J25vZGUnOiBwYXNzd29yZF9jb25maXJtX3VzZXJfaW5wdXQsICdlcnJvcl9uYW1lJzogJ3Bhc3N3b3JkX2NvbmZpcm1fdXNlcl9lcnJvcicsICdlcnJvcl9ub2RlJzogcGFzc3dvcmRfY29uZmlybV91c2VyX2Vycm9yLCAndGV4dCc6ICdNb3RzIGRlIHBhc3NlIG5vbiBpZGVudGlxdWUnLCAnaGFzX2Vycm9yJzogZmFsc2V9LFxyXG4gICAgICAgICdwYXNzd29yZF91c2VyX3Nob3cnOiB7J25vZGUnOiBwYXNzd29yZF91c2VyX3Nob3d9LFxyXG4gICAgICAgICduYW1lX2Fzc29jJzogeydub2RlJzogbmFtZV9hc3NvY19pbnB1dCwgJ2Vycm9yX25hbWUnOiAnbmFtZV9hc3NvY19lcnJvcicsJ2Vycm9yX25vZGUnOiBuYW1lX2Fzc29jX2Vycm9yLCAndGV4dCc6ICdGb3JtYXQgaW52YWxpZGUnLCAnaGFzX2Vycm9yJzogZmFsc2V9LFxyXG4gICAgICAgICdzaXJldF9hc3NvYyc6IHsnbm9kZSc6IHNpcmV0X2Fzc29jX2lucHV0LCAnZXJyb3JfbmFtZSc6ICdzaXJldF9hc3NvY19lcnJvcicsJ2Vycm9yX25vZGUnOiBzaXJldF9hc3NvY19lcnJvciwgJ3RleHQnOiAnU2lyZXQgaW52YWxpZGUnLCAnaGFzX2Vycm9yJzogZmFsc2V9LFxyXG4gICAgICAgICdhZHJlc3Nfc3RyZWV0X2Fzc29jJzogeydub2RlJzogYWRyZXNzX3N0cmVldF9hc3NvY19pbnB1dCwgJ2Vycm9yX25hbWUnOiAnYWRyZXNzX3N0cmVldF9hc3NvY19lcnJvcicsJ2Vycm9yX25vZGUnOiBhZHJlc3Nfc3RyZWV0X2Fzc29jX2Vycm9yLCAndGV4dCc6ICdGb3JtYXQgaW52YWxpZGUnLCAnaGFzX2Vycm9yJzogZmFsc2V9LFxyXG4gICAgICAgICdhZHJlc3NfY3BfYXNzb2MnOiB7J25vZGUnOiBhZHJlc3NfY3BfYXNzb2NfaW5wdXQsICdlcnJvcl9uYW1lJzogJ2FkcmVzc19jcF9hc3NvY19lcnJvcicsJ2Vycm9yX25vZGUnOiBhZHJlc3NfY3BfYXNzb2NfZXJyb3IsICd0ZXh0JzogJ0NvZGUgcG9zdGFsIGludmFsaWRlJywgJ2hhc19lcnJvcic6IGZhbHNlfSxcclxuICAgICAgICAnYWRyZXNzX2NpdHlfYXNzb2MnOiB7J25vZGUnOiBhZHJlc3NfY2l0eV9hc3NvY19pbnB1dCwgJ2Vycm9yX25hbWUnOiAnYWRyZXNzX2NpdHlfYXNzb2NfZXJyb3InLCdlcnJvcl9ub2RlJzogYWRyZXNzX2NpdHlfYXNzb2NfZXJyb3IsICd0ZXh0JzogJ0Zvcm1hdCBpbnZhbGlkZScsICdoYXNfZXJyb3InOiBmYWxzZX0sXHJcbiAgICAgICAgJ21hbmFnZXJfbGFzdG5hbWVfYXNzb2MnOiB7J25vZGUnOiAgbWFuYWdlcl9sYXN0bmFtZV9hc3NvY19pbnB1dCwgJ2Vycm9yX25hbWUnOiAnbWFuYWdlcl9sYXN0bmFtZV9hc3NvY19lcnJvcicsJ2Vycm9yX25vZGUnOiBtYW5hZ2VyX2xhc3RuYW1lX2Fzc29jX2Vycm9yLCAndGV4dCc6ICdGb3JtYXQgaW52YWxpZGUnLCAnaGFzX2Vycm9yJzogZmFsc2V9LFxyXG4gICAgICAgICdtYW5hZ2VyX2ZpcnN0bmFtZV9hc3NvYyc6IHsnbm9kZSc6IG1hbmFnZXJfZmlyc3RuYW1lX2Fzc29jX2lucHV0LCAnZXJyb3JfbmFtZSc6ICdtYW5hZ2VyX2ZpcnN0bmFtZV9hc3NvY19lcnJvcicsJ2Vycm9yX25vZGUnOiBtYW5hZ2VyX2ZpcnN0bmFtZV9hc3NvY19lcnJvciwgJ3RleHQnOiAnRm9ybWF0IGludmFsaWRlJywgJ2hhc19lcnJvcic6IGZhbHNlfSxcclxuICAgICAgICAnbWFuYWdlcl90ZWxfYXNzb2MnOiB7J25vZGUnOiBtYW5hZ2VyX3RlbF9hc3NvY19pbnB1dCwgJ2Vycm9yX25hbWUnOiAnbWFuYWdlcl90ZWxfYXNzb2NfZXJyb3InLCdlcnJvcl9ub2RlJzogbWFuYWdlcl90ZWxfYXNzb2NfZXJyb3IsICd0ZXh0JzogJ1TDqWzDqXBob25lIGludmFsaWRlJywgJ2hhc19lcnJvcic6IGZhbHNlfSxcclxuICAgICAgICAnbWFuYWdlcl9lbWFpbF9hc3NvYyc6IHsnbm9kZSc6IG1hbmFnZXJfZW1haWxfYXNzb2NfaW5wdXQsICdlcnJvcl9uYW1lJzogJ21hbmFnZXJfZW1haWxfYXNzb2NfZXJyb3InLCdlcnJvcl9ub2RlJzogbWFuYWdlcl9lbWFpbF9hc3NvY19lcnJvciwgJ3RleHQnOiAnRW1haWwgaW52YWxpZGUnLCAnaGFzX2Vycm9yJzogZmFsc2V9LFxyXG4gICAgICAgICdkaXNjaXBsaW5lX2Fzc29jJzogeydub2RlJzogZGlzY2lwbGluZV9hc3NvY19pbnB1dCwgJ2Vycm9yX25hbWUnOiBudWxsLCdlcnJvcl9ub2RlJzogbnVsbH1cclxuICAgIH0sXHJcbiAgICAnYWN0aW9uJzoge1xyXG4gICAgICAgICdkYXRlX2FjdGlvbic6IHsgJ25vZGUnOiBkYXRlX2FjdGlvbl9pbnB1dCwgJ2Vycm9yX25hbWUnOiAnZGF0ZV9hY3Rpb25fZXJyb3InLCAnZXJyb3Jfbm9kZSc6IGRhdGVfYWN0aW9uX2Vycm9yLCAndGV4dCc6ICdGb3JtYXQgaW52YWxpZGUnLCAnaGFzX2Vycm9yJzogZmFsc2V9LFxyXG4gICAgICAgICduYXR1cmVfYWN0aW9uJzogeyAnbm9kZSc6IG5hdHVyZV9hY3Rpb25faW5wdXQsICdlcnJvcl9uYW1lJzogJ25hdHVyZV9hY3Rpb25fZXJyb3InLCAnZXJyb3Jfbm9kZSc6IG5hdHVyZV9hY3Rpb25fZXJyb3IsICd0ZXh0JzogJ0Zvcm1hdCBpbnZhbGlkZScsICdoYXNfZXJyb3InOiBmYWxzZX0sXHJcbiAgICAgICAgJ2ttX2FjdGlvbic6IHsgJ25vZGUnOiBrbV9hY3Rpb25faW5wdXQsICdlcnJvcl9uYW1lJzogJ2ttX2FjdGlvbl9lcnJvcicsICdlcnJvcl9ub2RlJzoga21fYWN0aW9uX2Vycm9yLCAndGV4dCc6ICdGb3JtYXQgaW52YWxpZGUnLCAnaGFzX2Vycm9yJzogZmFsc2V9LFxyXG4gICAgICAgICd0aW1lX3N0YXJ0X2FjdGlvbic6IHsgJ25vZGUnOiB0aW1lX3N0YXJ0X2FjdGlvbl9pbnB1dCwgJ2Vycm9yX25hbWUnOiAndGltZV9zdGFydF9hY3Rpb25fZXJyb3InLCAnZXJyb3Jfbm9kZSc6IHRpbWVfc3RhcnRfYWN0aW9uX2Vycm9yLCAndGV4dCc6ICdGb3JtYXQgaW52YWxpZGUnLCAnaGFzX2Vycm9yJzogZmFsc2V9LFxyXG4gICAgICAgICd0aW1lX2VuZF9hY3Rpb24nOiB7ICdub2RlJzogdGltZV9lbmRfYWN0aW9uX2lucHV0LCAnZXJyb3JfbmFtZSc6ICd0aW1lX2VuZF9hY3Rpb25fZXJyb3InLCAnZXJyb3Jfbm9kZSc6IHRpbWVfZW5kX2FjdGlvbl9lcnJvciwgJ3RleHQnOiAnRm9ybWF0IGludmFsaWRlJywgJ2hhc19lcnJvcic6IGZhbHNlfSxcclxuICAgICAgICAnZHVyYXRpb25fYWN0aW9uJzogeyAnbm9kZSc6IGR1cmF0aW9uX2FjdGlvbl9pbnB1dCwgJ2Vycm9yX25hbWUnOiAnZHVyYXRpb25fYWN0aW9uX2Vycm9yJywgJ2Vycm9yX25vZGUnOiBkdXJhdGlvbl9hY3Rpb25fZXJyb3IsICd0ZXh0JzogJ0Zvcm1hdCBpbnZhbGlkZScsICdoYXNfZXJyb3InOiBmYWxzZX0sXHJcbiAgICAgICAgJ2dyb3VwZV9jbGFzc2lmaWNhdGlvbl9hY3Rpb24nOiB7ICdub2RlJzogZ3JvdXBlX2NsYXNzaWZpY2F0aW9uX2FjdGlvbl9pbnB1dCwgJ2Vycm9yX25hbWUnOiAnZ3JvdXBlX2NsYXNzaWZpY2F0aW9uX2FjdGlvbl9lcnJvcicsICdlcnJvcl9ub2RlJzogZ3JvdXBlX2NsYXNzaWZpY2F0aW9uX2FjdGlvbl9lcnJvciwgJ3RleHQnOiAnRm9ybWF0IGludmFsaWRlJywgJ2hhc19lcnJvcic6IGZhbHNlfSxcclxuICAgICAgICAnZnJhaXNfaG9yYWlyZXNfYWN0aW9uJzogeyAnbm9kZSc6IGZyYWlzX2hvcmFpcmVzX2FjdGlvbl9pbnB1dCwgJ2Vycm9yX25hbWUnOiAnZnJhaXNfaG9yYWlyZXNfYWN0aW9uX2Vycm9yJywgJ2Vycm9yX25vZGUnOiBmcmFpc19ob3JhaXJlc19hY3Rpb25fZXJyb3IsICd0ZXh0JzogJ0Zvcm1hdCBpbnZhbGlkZScsICdoYXNfZXJyb3InOiBmYWxzZX0sXHJcbiAgICAgICAgJ2ZyYWlzX2ttX2FjdGlvbic6IHsgJ25vZGUnOiBmcmFpc19rbV9hY3Rpb25faW5wdXQsICdlcnJvcl9uYW1lJzogJ2ZyYWlzX2ttX2FjdGlvbl9lcnJvcicsICdlcnJvcl9ub2RlJzogZnJhaXNfa21fYWN0aW9uX2Vycm9yLCAndGV4dCc6ICdGb3JtYXQgaW52YWxpZGUnLCAnaGFzX2Vycm9yJzogZmFsc2V9LFxyXG4gICAgICAgICdvdGhlcl9jb3N0X2FjdGlvbic6IHsgJ25vZGUnOiBvdGhlcl9jb3N0X2FjdGlvbl9pbnB1dCwgJ2Vycm9yX25hbWUnOiAnb3RoZXJfY29zdF9hY3Rpb25fZXJyb3InLCAnZXJyb3Jfbm9kZSc6IG90aGVyX2Nvc3RfYWN0aW9uX2Vycm9yLCAndGV4dCc6ICdGb3JtYXQgaW52YWxpZGUnLCAnaGFzX2Vycm9yJzogZmFsc2V9LFxyXG4gICAgICAgICdiYXJlbWVfYWN0aW9uJzogeyAnbm9kZSc6IGJhcmVtZV9hY3Rpb25faW5wdXQsICdlcnJvcl9uYW1lJzogJ2JhcmVtZV9hY3Rpb25fZXJyb3InLCAnZXJyb3Jfbm9kZSc6IGJhcmVtZV9hY3Rpb25fZXJyb3IsICd0ZXh0JzogJ0Zvcm1hdCBpbnZhbGlkZScsICdoYXNfZXJyb3InOiBmYWxzZX0sXHJcbiAgICAgICAgJ2ZyYWlzX2FjdGlvbic6IHsgJ25vZGUnOiBmcmFpc19hY3Rpb25faW5wdXQsICdlcnJvcl9uYW1lJzogJ2ZyYWlzX2FjdGlvbl9lcnJvcicsICdlcnJvcl9ub2RlJzogZnJhaXNfYWN0aW9uX2Vycm9yLCAndGV4dCc6ICdGb3JtYXQgaW52YWxpZGUnLCAnaGFzX2Vycm9yJzogZmFsc2V9LFxyXG4gICAgICAgICdmcmFpc19kZXBsYWNlbWVudF9hY3Rpb24nOiB7ICdub2RlJzogZnJhaXNfZGVwbGFjZW1lbnRfYWN0aW9uX2lucHV0LCAnZXJyb3JfbmFtZSc6ICdmcmFpc19kZXBsYWNlbWVudF9hY3Rpb25fZXJyb3InLCAnZXJyb3Jfbm9kZSc6IGZyYWlzX2RlcGxhY2VtZW50X2FjdGlvbl9lcnJvciwgJ3RleHQnOiAnRm9ybWF0IGludmFsaWRlJywgJ2hhc19lcnJvcic6IGZhbHNlfSxcclxuICAgICAgICAncGF5ZW1lbnRfYWN0aW9uJzogeyAnbm9kZSc6IHBheWVtZW50X2FjdGlvbl9pbnB1dCwgJ2Vycm9yX25hbWUnOiAncGF5ZW1lbnRfYWN0aW9uX2Vycm9yJywgJ2Vycm9yX25vZGUnOiBwYXllbWVudF9hY3Rpb25fZXJyb3IsICd0ZXh0JzogJ0Zvcm1hdCBpbnZhbGlkZScsICdoYXNfZXJyb3InOiBmYWxzZX0sXHJcbiAgICAgICAgJ3ZhbG9yaXNhdGlvbl9hY3Rpb24nOiB7ICdub2RlJzogdmFsb3Jpc2F0aW9uX2FjdGlvbl9pbnB1dCwgJ2Vycm9yX25hbWUnOiAndmFsb3Jpc2F0aW9uX2FjdGlvbl9lcnJvcicsICdlcnJvcl9ub2RlJzogdmFsb3Jpc2F0aW9uX2FjdGlvbl9lcnJvciwgJ3RleHQnOiAnRm9ybWF0IGludmFsaWRlJywgJ2hhc19lcnJvcic6IGZhbHNlfSxcclxuICAgICAgICAnZG9uX2FjdGlvbic6IHsgJ25vZGUnOiBkb25fYWN0aW9uX2lucHV0LCAnZXJyb3JfbmFtZSc6ICdkb25fYWN0aW9uX2Vycm9yJywgJ2Vycm9yX25vZGUnOiBkb25fYWN0aW9uX2Vycm9yLCAndGV4dCc6ICdGb3JtYXQgaW52YWxpZGUnLCAnaGFzX2Vycm9yJzogZmFsc2V9LFxyXG4gICAgfVxyXG59O1xyXG5jb25zb2xlLmxvZygncGZmZicpO1xyXG5pZiAoZGVidWcgPT09IHRydWUpIHtcclxuICAgIGNvbnNvbGUubG9nKGRvbURhdGEpO1xyXG59XHJcbi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMgRVZFTlRMSVNURU5FUiAjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIEhPTUUgIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuaWYgKGJvZHkuaWQgPT09IFwiaG9tZVwiKVxyXG57XHJcbiAgICAvLyBibHVyXHJcbiAgICBsb2dpbl9pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgbG9naW5NYW5hZ2VyLCB0cnVlKTtcclxuICAgIHBhc3N3b3JkX2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBsb2dpbk1hbmFnZXIsIHRydWUpO1xyXG4gICAgLy8gZm9jdXNcclxuICAgIGxvZ2luX2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgbG9naW5NYW5hZ2VyLCB0cnVlKTtcclxuICAgIHBhc3N3b3JkX2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgbG9naW5NYW5hZ2VyLCB0cnVlKTtcclxuICAgIC8vIGNsaWNrXHJcbiAgICBwYXNzd29yZF9zaG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGFzc3dvcmRWaWV3ZXIsIHRydWUpO1xyXG4gICAgLy8gc3VibWl0XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBsb2dpbk1hbmFnZXIsIHRydWUpO1xyXG59XHJcbi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIFJFR0lTVEVSIGN1c3RvbWVyICMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbmlmIChib2R5LmlkID09PSAncmVnaXN0ZXJfY3VzdG9tZXInIHx8IGJvZHkuaWQgPT09ICdyZWdpc3Rlcl9hc3NvYycpXHJcbntcclxuICAgIC8vIGJsdXJcclxuICAgIGxhc3RuYW1lX3VzZXJfaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGN1c3RvbWVyTWFuYWdlciwgdHJ1ZSk7XHJcbiAgICBmaXJzdG5hbWVfdXNlcl9pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgY3VzdG9tZXJNYW5hZ2VyLCB0cnVlKTtcclxuICAgIGNpdHlfdXNlcl9pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgY3VzdG9tZXJNYW5hZ2VyLCB0cnVlKTtcclxuICAgIHRlbF91c2VyX2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBjdXN0b21lck1hbmFnZXIsIHRydWUpO1xyXG4gICAgZW1haWxfdXNlcl9pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgY3VzdG9tZXJNYW5hZ2VyLCB0cnVlKTtcclxuICAgIHBhc3N3b3JkX3VzZXJfaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGN1c3RvbWVyTWFuYWdlciwgdHJ1ZSk7XHJcbiAgICBwYXNzd29yZF9jb25maXJtX3VzZXJfaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGN1c3RvbWVyTWFuYWdlciwgdHJ1ZSk7XHJcbiAgICAvLyBmb2N1c1xyXG4gICAgbGFzdG5hbWVfdXNlcl9pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGN1c3RvbWVyTWFuYWdlciwgdHJ1ZSk7XHJcbiAgICBmaXJzdG5hbWVfdXNlcl9pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGN1c3RvbWVyTWFuYWdlciwgdHJ1ZSk7XHJcbiAgICBjaXR5X3VzZXJfaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBjdXN0b21lck1hbmFnZXIsIHRydWUpO1xyXG4gICAgdGVsX3VzZXJfaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBjdXN0b21lck1hbmFnZXIsIHRydWUpO1xyXG4gICAgZW1haWxfdXNlcl9pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGN1c3RvbWVyTWFuYWdlciwgdHJ1ZSk7XHJcbiAgICBwYXNzd29yZF91c2VyX2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgY3VzdG9tZXJNYW5hZ2VyLCB0cnVlKTtcclxuICAgIHBhc3N3b3JkX2NvbmZpcm1fdXNlcl9pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGN1c3RvbWVyTWFuYWdlciwgdHJ1ZSk7XHJcbiAgICAvLyBjbGlja1xyXG4gICAgcGFzc3dvcmRfc2hvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBhc3N3b3JkVmlld2VyLCB0cnVlKTtcclxuICAgIC8vIHN1Ym1pdFxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgY3VzdG9tZXJNYW5hZ2VyLCB0cnVlKTtcclxufVxyXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyBSRUdJU1RFUiBBU1NPQyAjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG5pZiAoYm9keS5pZCA9PT0gJ3JlZ2lzdGVyX2Fzc29jJylcclxue1xyXG4gICAgLy8gYmx1clxyXG4gICAgbmFtZV9hc3NvY19pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgYXNzb2NNYW5hZ2VyLCB0cnVlKTtcclxuICAgIHNpcmV0X2Fzc29jX2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBhc3NvY01hbmFnZXIsIHRydWUpO1xyXG4gICAgYWRyZXNzX3N0cmVldF9hc3NvY19pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgYXNzb2NNYW5hZ2VyLCB0cnVlKTtcclxuICAgIGFkcmVzc19jcF9hc3NvY19pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgYXNzb2NNYW5hZ2VyLCB0cnVlKTtcclxuICAgIGFkcmVzc19jaXR5X2Fzc29jX2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBhc3NvY01hbmFnZXIsIHRydWUpO1xyXG4gICAgbWFuYWdlcl9sYXN0bmFtZV9hc3NvY19pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgYXNzb2NNYW5hZ2VyLCB0cnVlKTtcclxuICAgIG1hbmFnZXJfZmlyc3RuYW1lX2Fzc29jX2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBhc3NvY01hbmFnZXIsIHRydWUpO1xyXG4gICAgbWFuYWdlcl90ZWxfYXNzb2NfaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGFzc29jTWFuYWdlciwgdHJ1ZSk7XHJcbiAgICBtYW5hZ2VyX2VtYWlsX2Fzc29jX2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBhc3NvY01hbmFnZXIsIHRydWUpO1xyXG4gICAgZGlzY2lwbGluZV9hc3NvY19pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgYXNzb2NNYW5hZ2VyLCB0cnVlKTtcclxuICAgIC8vIGZvY3VzXHJcbiAgICBuYW1lX2Fzc29jX2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgYXNzb2NNYW5hZ2VyLCB0cnVlKTtcclxuICAgIHNpcmV0X2Fzc29jX2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgYXNzb2NNYW5hZ2VyLCB0cnVlKTtcclxuICAgIGFkcmVzc19zdHJlZXRfYXNzb2NfaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBhc3NvY01hbmFnZXIsIHRydWUpO1xyXG4gICAgYWRyZXNzX2NwX2Fzc29jX2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgYXNzb2NNYW5hZ2VyLCB0cnVlKTtcclxuICAgIGFkcmVzc19jaXR5X2Fzc29jX2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgYXNzb2NNYW5hZ2VyLCB0cnVlKTtcclxuICAgIG1hbmFnZXJfbGFzdG5hbWVfYXNzb2NfaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBhc3NvY01hbmFnZXIsIHRydWUpO1xyXG4gICAgbWFuYWdlcl9maXJzdG5hbWVfYXNzb2NfaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBhc3NvY01hbmFnZXIsIHRydWUpO1xyXG4gICAgbWFuYWdlcl90ZWxfYXNzb2NfaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBhc3NvY01hbmFnZXIsIHRydWUpO1xyXG4gICAgbWFuYWdlcl9lbWFpbF9hc3NvY19pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGFzc29jTWFuYWdlciwgdHJ1ZSk7XHJcbiAgICBkaXNjaXBsaW5lX2Fzc29jX2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgYXNzb2NNYW5hZ2VyLCB0cnVlKTtcclxuICAgIC8vIGNsaWNrXHJcbiAgICBwYXNzd29yZF9zaG93X2Fzc29jLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGFzc3dvcmRWaWV3ZXIsIHRydWUpO1xyXG4gICAgLy8gY2hhbmdlXHJcbiAgICBkaXNjaXBsaW5lX2Fzc29jX2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgYXNzb2NNYW5hZ2VyLCB0cnVlKTtcclxuICAgIC8vIHN1Ym1pdFxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXNzb2NNYW5hZ2VyLCB0cnVlKTtcclxufVxyXG4vLyBhY3Rpb25cclxuaWYgKGJvZHkuaWQgPT09IFwiYWN0aW9uXCIpIFxyXG57XHJcbiAgICAvLyBibHVyXHJcbiAgICBkYXRlX2FjdGlvbl9pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgYWN0aW9uTWFuYWdlciwgdHJ1ZSk7XHJcbiAgICBuYXR1cmVfYWN0aW9uX2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBhY3Rpb25NYW5hZ2VyLCB0cnVlKTtcclxuICAgIGttX2FjdGlvbl9pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgYWN0aW9uTWFuYWdlciwgdHJ1ZSk7XHJcbiAgICB0aW1lX3N0YXJ0X2FjdGlvbl9pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgYWN0aW9uTWFuYWdlciwgdHJ1ZSk7XHJcbiAgICB0aW1lX2VuZF9hY3Rpb25faW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGFjdGlvbk1hbmFnZXIsIHRydWUpO1xyXG4gICAgZHVyYXRpb25fYWN0aW9uX2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBhY3Rpb25NYW5hZ2VyLCB0cnVlKTtcclxuICAgIGdyb3VwZV9jbGFzc2lmaWNhdGlvbl9hY3Rpb25faW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGFjdGlvbk1hbmFnZXIsIHRydWUpO1xyXG4gICAgZnJhaXNfaG9yYWlyZXNfYWN0aW9uX2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBhY3Rpb25NYW5hZ2VyLCB0cnVlKTtcclxuICAgIGZyYWlzX2ttX2FjdGlvbl9pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgYWN0aW9uTWFuYWdlciwgdHJ1ZSk7XHJcbiAgICBvdGhlcl9jb3N0X2FjdGlvbl9pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgYWN0aW9uTWFuYWdlciwgdHJ1ZSk7XHJcbiAgICBiYXJlbWVfYWN0aW9uX2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBhY3Rpb25NYW5hZ2VyLCB0cnVlKTtcclxuICAgIGZyYWlzX2FjdGlvbl9pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgYWN0aW9uTWFuYWdlciwgdHJ1ZSk7XHJcbiAgICBmcmFpc19kZXBsYWNlbWVudF9hY3Rpb25faW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGFjdGlvbk1hbmFnZXIsIHRydWUpO1xyXG4gICAgcGF5ZW1lbnRfYWN0aW9uX2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBhY3Rpb25NYW5hZ2VyLCB0cnVlKTtcclxuICAgIHZhbG9yaXNhdGlvbl9hY3Rpb25faW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGFjdGlvbk1hbmFnZXIsIHRydWUpO1xyXG4gICAgZG9uX2FjdGlvbl9pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgYWN0aW9uTWFuYWdlciwgdHJ1ZSk7XHJcbiAgICAvLyBmb2N1c1xyXG4gICAgZGF0ZV9hY3Rpb25faW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBhY3Rpb25NYW5hZ2VyLCB0cnVlKTtcclxuICAgIG5hdHVyZV9hY3Rpb25faW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBhY3Rpb25NYW5hZ2VyLCB0cnVlKTtcclxuICAgIGttX2FjdGlvbl9pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGFjdGlvbk1hbmFnZXIsIHRydWUpO1xyXG4gICAgdGltZV9zdGFydF9hY3Rpb25faW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBhY3Rpb25NYW5hZ2VyLCB0cnVlKTtcclxuICAgIHRpbWVfZW5kX2FjdGlvbl9pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGFjdGlvbk1hbmFnZXIsIHRydWUpO1xyXG4gICAgZHVyYXRpb25fYWN0aW9uX2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgYWN0aW9uTWFuYWdlciwgdHJ1ZSk7XHJcbiAgICBncm91cGVfY2xhc3NpZmljYXRpb25fYWN0aW9uX2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgYWN0aW9uTWFuYWdlciwgdHJ1ZSk7XHJcbiAgICBmcmFpc19ob3JhaXJlc19hY3Rpb25faW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBhY3Rpb25NYW5hZ2VyLCB0cnVlKTtcclxuICAgIGZyYWlzX2ttX2FjdGlvbl9pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGFjdGlvbk1hbmFnZXIsIHRydWUpO1xyXG4gICAgb3RoZXJfY29zdF9hY3Rpb25faW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBhY3Rpb25NYW5hZ2VyLCB0cnVlKTtcclxuICAgIGJhcmVtZV9hY3Rpb25faW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBhY3Rpb25NYW5hZ2VyLCB0cnVlKTtcclxuICAgIGZyYWlzX2FjdGlvbl9pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGFjdGlvbk1hbmFnZXIsIHRydWUpO1xyXG4gICAgZnJhaXNfZGVwbGFjZW1lbnRfYWN0aW9uX2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgYWN0aW9uTWFuYWdlciwgdHJ1ZSk7XHJcbiAgICBwYXllbWVudF9hY3Rpb25faW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBhY3Rpb25NYW5hZ2VyLCB0cnVlKTtcclxuICAgIHZhbG9yaXNhdGlvbl9hY3Rpb25faW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBhY3Rpb25NYW5hZ2VyLCB0cnVlKTtcclxuICAgIGRvbl9hY3Rpb25faW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBhY3Rpb25NYW5hZ2VyLCB0cnVlKTtcclxuICAgIC8vIHN1Ym1pdFxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYWN0aW9uTWFuYWdlciwgdHJ1ZSk7XHJcbn1cclxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIEVWRU5UTUFOQUdFUiAjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuZnVuY3Rpb24gbG9naW5NYW5hZ2VyKClcclxue1xyXG4gICAgc3dpdGNoKGV2ZW50LnR5cGUpXHJcbiAgICB7XHJcbiAgICAgICAgY2FzZSAnYmx1cic6XHJcbiAgICAgICAgICAgIHN3aXRjaChldmVudC50YXJnZXQuY2xhc3NOYW1lKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdsb2dpbic6XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZEVtYWlsKGxvZ2luX2lucHV0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHZhbGlkKGxvZ2luX2lucHV0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB1bnZhbGlkKGxvZ2luX2lucHV0KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3Bhc3N3b3JkJzpcclxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkUGFzc3dvcmQocGFzc3dvcmRfaW5wdXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgPyB2YWxpZChwYXNzd29yZF9pbnB1dClcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiB1bnZhbGlkKHBhc3N3b3JkX2lucHV0KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdmb2N1cyc6XHJcbiAgICAgICAgICAgIHJlc2V0VmFsaWQoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnY2xpY2snOlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdzdWJtaXQnOlxyXG4gICAgICAgICAgICBzdWJtaXRWYWxpZGF0b3IoZXZlbnQsIGJvZHkuaWQpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0IDpcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFdmVudCB0eXBlIG5vdCBmb3VuZCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjdXN0b21lck1hbmFnZXIoKVxyXG57XHJcbiAgICBzd2l0Y2goZXZlbnQudHlwZSlcclxuICAgIHtcclxuICAgICAgICBjYXNlICdibHVyJzpcclxuICAgICAgICAgICAgc3dpdGNoKGV2ZW50LnRhcmdldC5jbGFzc05hbWUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2xhc3RuYW1lX3VzZXInOlxyXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWRTdHJpbmcobGFzdG5hbWVfdXNlcl9pbnB1dC52YWx1ZSkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdmFsaWQobGFzdG5hbWVfdXNlcl9pbnB1dCkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHVudmFsaWQobGFzdG5hbWVfdXNlcl9pbnB1dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdmaXJzdG5hbWVfdXNlcic6XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZFN0cmluZyhmaXJzdG5hbWVfdXNlcl9pbnB1dC52YWx1ZSkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdmFsaWQoZmlyc3RuYW1lX3VzZXJfaW5wdXQpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB1bnZhbGlkKGZpcnN0bmFtZV91c2VyX2lucHV0KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2NpdHlfdXNlcic6XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZFN0cmluZyhjaXR5X3VzZXJfaW5wdXQudmFsdWUpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHZhbGlkKGNpdHlfdXNlcl9pbnB1dCkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHVudmFsaWQoY2l0eV91c2VyX2lucHV0KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3RlbF91c2VyJzpcclxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkVGVsKHRlbF91c2VyX2lucHV0LnZhbHVlKSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyB2YWxpZCh0ZWxfdXNlcl9pbnB1dCkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHVudmFsaWQodGVsX3VzZXJfaW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnZW1haWxfdXNlcic6XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZEVtYWlsKGVtYWlsX3VzZXJfaW5wdXQudmFsdWUpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHZhbGlkKGVtYWlsX3VzZXJfaW5wdXQpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB1bnZhbGlkKGVtYWlsX3VzZXJfaW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAncGFzc3dvcmRfdXNlcic6XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZFBhc3N3b3JkKHBhc3N3b3JkX3VzZXJfaW5wdXQudmFsdWUpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHZhbGlkKHBhc3N3b3JkX3VzZXJfaW5wdXQpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB1bnZhbGlkKHBhc3N3b3JkX3VzZXJfaW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAncGFzc3dvcmRfY29uZmlybV91c2VyJzpcclxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZF9jb25maXJtX3VzZXJfaW5wdXQudmFsdWUgPT09IHBhc3N3b3JkX3VzZXJfaW5wdXQudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyB2YWxpZChwYXNzd29yZF9jb25maXJtX3VzZXJfaW5wdXQpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB1bnZhbGlkKHBhc3N3b3JkX2NvbmZpcm1fdXNlcl9pbnB1dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBjb25zb2xlLmxvZygnVGhlIGV2ZW50IDwnICsgZXZlbnQgKyAnPiBjYW5cXCd0IG1hdGNoIHRoZSBjbGFzc25hbWUgPCcgKyBldmVudC50YXJnZXQuY2xhc3NOYW1lKyAnPicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2ZvY3VzJzpcclxuICAgICAgICAgICAgcmVzZXRWYWxpZChldmVudC50YXJnZXQpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdjbGljayc6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3N1Ym1pdCc6XHJcbiAgICAgICAgICAgIHN1Ym1pdFZhbGlkYXRvcihldmVudCwgYm9keS5pZCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQgOlxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V2ZW50IHR5cGUgbm90IGZvdW5kJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFzc29jTWFuYWdlcigpXHJcbntcclxuICAgIHN3aXRjaChldmVudC50eXBlKVxyXG4gICAge1xyXG4gICAgICAgIGNhc2UgJ2JsdXInOlxyXG4gICAgICAgICAgICBzd2l0Y2goZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnbmFtZV9hc3NvYyc6XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZFN0cmluZyhuYW1lX2Fzc29jX2lucHV0LnZhbHVlKSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyB2YWxpZChuYW1lX2Fzc29jX2lucHV0KSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdW52YWxpZChuYW1lX2Fzc29jX2lucHV0KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3NpcmV0X2Fzc29jJzpcclxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkU2lyZXQoc2lyZXRfYXNzb2NfaW5wdXQudmFsdWUpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHZhbGlkKHNpcmV0X2Fzc29jX2lucHV0KSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdW52YWxpZChzaXJldF9hc3NvY19pbnB1dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdhZHJlc3Nfc3RyZWV0X2Fzc29jJzpcclxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkU3RyaW5nKGFkcmVzc19zdHJlZXRfYXNzb2NfaW5wdXQudmFsdWUpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHZhbGlkKGFkcmVzc19zdHJlZXRfYXNzb2NfaW5wdXQpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB1bnZhbGlkKGFkcmVzc19zdHJlZXRfYXNzb2NfaW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnYWRyZXNzX2NwX2Fzc29jJzpcclxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkQ3AoYWRyZXNzX2NwX2Fzc29jX2lucHV0LnZhbHVlKSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyB2YWxpZChhZHJlc3NfY3BfYXNzb2NfaW5wdXQpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB1bnZhbGlkKGFkcmVzc19jcF9hc3NvY19pbnB1dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdhZHJlc3NfY2l0eV9hc3NvYyc6XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZFN0cmluZyhhZHJlc3NfY2l0eV9hc3NvY19pbnB1dC52YWx1ZSkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdmFsaWQoYWRyZXNzX2NpdHlfYXNzb2NfaW5wdXQpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB1bnZhbGlkKGFkcmVzc19jaXR5X2Fzc29jX2lucHV0KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ21hbmFnZXJfbGFzdG5hbWVfYXNzb2MnOlxyXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWRTdHJpbmcobWFuYWdlcl9sYXN0bmFtZV9hc3NvY19pbnB1dC52YWx1ZSkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdmFsaWQobWFuYWdlcl9sYXN0bmFtZV9hc3NvY19pbnB1dCkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHVudmFsaWQobWFuYWdlcl9sYXN0bmFtZV9hc3NvY19pbnB1dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdtYW5hZ2VyX2ZpcnN0bmFtZV9hc3NvYyc6XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZFN0cmluZyhtYW5hZ2VyX2ZpcnN0bmFtZV9hc3NvY19pbnB1dC52YWx1ZSkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdmFsaWQobWFuYWdlcl9maXJzdG5hbWVfYXNzb2NfaW5wdXQpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB1bnZhbGlkKG1hbmFnZXJfZmlyc3RuYW1lX2Fzc29jX2lucHV0KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ21hbmFnZXJfdGVsX2Fzc29jJzpcclxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkVGVsKG1hbmFnZXJfdGVsX2Fzc29jX2lucHV0LnZhbHVlKSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyB2YWxpZChtYW5hZ2VyX3RlbF9hc3NvY19pbnB1dCkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHVudmFsaWQobWFuYWdlcl90ZWxfYXNzb2NfaW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnbWFuYWdlcl9lbWFpbF9hc3NvYyc6XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZEVtYWlsKG1hbmFnZXJfZW1haWxfYXNzb2NfaW5wdXQudmFsdWUpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHZhbGlkKG1hbmFnZXJfZW1haWxfYXNzb2NfaW5wdXQpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB1bnZhbGlkKG1hbmFnZXJfZW1haWxfYXNzb2NfaW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnZGlzY2lwbGluZV9hc3NvYyc6XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZERpc2NpcGxpbmUoZGlzY2lwbGluZV9hc3NvY19pbnB1dCkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdmFsaWQoZGlzY2lwbGluZV9hc3NvY19pbnB1dClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdW52YWxpZChkaXNjaXBsaW5lX2Fzc29jX2lucHV0LCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnZm9jdXMnOlxyXG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSBcImRpc2NpcGxpbmVfYXNzb2NcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc2V0VmFsaWQoZXZlbnQudGFyZ2V0LCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc2V0VmFsaWQoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lWzBdID09PSBcImRpc2NpcGxpbmVfYXNzb2NcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc2V0VmFsaWQoZXZlbnQudGFyZ2V0LCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc2V0VmFsaWQoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdjbGljayc6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2NoYW5nZSc6IFxyXG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSBcImRpc2NpcGxpbmVfYXNzb2NcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc2V0VmFsaWQoZXZlbnQudGFyZ2V0LCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc2V0VmFsaWQoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lWzBdID09PSBcImRpc2NpcGxpbmVfYXNzb2NcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc2V0VmFsaWQoZXZlbnQudGFyZ2V0LCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc2V0VmFsaWQoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdzdWJtaXQnOlxyXG4gICAgICAgICAgICAgICAgc3VibWl0VmFsaWRhdG9yKGV2ZW50LCBib2R5LmlkKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQgOlxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V2ZW50IHR5cGUgbm90IGZvdW5kJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFjdGlvbk1hbmFnZXIoKVxyXG57XHJcbiAgICBzd2l0Y2goZXZlbnQudHlwZSlcclxuICAgIHtcclxuICAgICAgICBjYXNlICdibHVyJzpcclxuICAgICAgICAgICAgc3dpdGNoKGV2ZW50LnRhcmdldC5jbGFzc05hbWUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2RhdGVfYWN0aW9uJzpcclxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkRGF0ZShkYXRlX2FjdGlvbl9pbnB1dC52YWx1ZSkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdmFsaWQoZGF0ZV9hY3Rpb25faW5wdXQpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB1bnZhbGlkKGRhdGVfYWN0aW9uX2lucHV0KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ25hdHVyZV9hY3Rpb24nOlxyXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWRTdHJpbmcobmF0dXJlX2FjdGlvbl9pbnB1dC52YWx1ZSkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdmFsaWQobmF0dXJlX2FjdGlvbl9pbnB1dCkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHVudmFsaWQobmF0dXJlX2FjdGlvbl9pbnB1dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdrbV9hY3Rpb24nOlxyXG4gICAgICAgICAgICAgICAgaXNWYWxpZFN0cmluZyhrbV9hY3Rpb25faW5wdXQudmFsdWUpIFxyXG4gICAgICAgICAgICAgICAgICAgID8gdmFsaWQoa21fYWN0aW9uX2lucHV0KSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiB1bnZhbGlkKGttX2FjdGlvbl9pbnB1dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICd0aW1lX3N0YXJ0X2FjdGlvbic6XHJcbiAgICAgICAgICAgICAgICBpc1ZhbGlkSW5qZWN0KHRpbWVfc3RhcnRfYWN0aW9uX2lucHV0LnZhbHVlKSBcclxuICAgICAgICAgICAgICAgICAgICA/IHZhbGlkKHRpbWVfc3RhcnRfYWN0aW9uX2lucHV0KSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiB1bnZhbGlkKHRpbWVfc3RhcnRfYWN0aW9uX2lucHV0KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3RpbWVfZW5kX2FjdGlvbic6XHJcbiAgICAgICAgICAgICAgICBpc1ZhbGlkSW5qZWN0KHRpbWVfZW5kX2FjdGlvbl9pbnB1dC52YWx1ZSkgXHJcbiAgICAgICAgICAgICAgICAgICAgPyB2YWxpZCh0aW1lX2VuZF9hY3Rpb25faW5wdXQpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHVudmFsaWQodGltZV9lbmRfYWN0aW9uX2lucHV0KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2R1cmF0aW9uX2FjdGlvbic6XHJcbiAgICAgICAgICAgICAgICBpc1ZhbGlkSW5qZWN0KGR1cmF0aW9uX2FjdGlvbl9pbnB1dC52YWx1ZSkgXHJcbiAgICAgICAgICAgICAgICAgICAgPyB2YWxpZChkdXJhdGlvbl9hY3Rpb25faW5wdXQpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHVudmFsaWQoZHVyYXRpb25fYWN0aW9uX2lucHV0KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2dyb3VwZV9jbGFzc2lmaWNhdGlvbl9hY3Rpb24nOlxyXG4gICAgICAgICAgICAgICAgaXNWYWxpZEluamVjdChncm91cGVfY2xhc3NpZmljYXRpb25fYWN0aW9uX2lucHV0LnZhbHVlKSBcclxuICAgICAgICAgICAgICAgICAgICA/IHZhbGlkKGdyb3VwZV9jbGFzc2lmaWNhdGlvbl9hY3Rpb25faW5wdXQpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHVudmFsaWQoZ3JvdXBlX2NsYXNzaWZpY2F0aW9uX2FjdGlvbl9pbnB1dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdmcmFpc19ob3JhaXJlc19hY3Rpb24nOlxyXG4gICAgICAgICAgICAgICAgaXNWYWxpZEluamVjdChmcmFpc19ob3JhaXJlc19hY3Rpb25faW5wdXQudmFsdWUpIFxyXG4gICAgICAgICAgICAgICAgICAgID8gdmFsaWQoZnJhaXNfaG9yYWlyZXNfYWN0aW9uX2lucHV0KSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiB1bnZhbGlkKGZyYWlzX2hvcmFpcmVzX2FjdGlvbl9pbnB1dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdmcmFpc19rbV9hY3Rpb24nOlxyXG4gICAgICAgICAgICAgICAgaXNWYWxpZE51bWJlcihmcmFpc19rbV9hY3Rpb25faW5wdXQudmFsdWUpIFxyXG4gICAgICAgICAgICAgICAgICAgID8gdmFsaWQoZnJhaXNfa21fYWN0aW9uX2lucHV0KSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiB1bnZhbGlkKGZyYWlzX2ttX2FjdGlvbl9pbnB1dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdvdGhlcl9jb3N0X2FjdGlvbic6XHJcbiAgICAgICAgICAgICAgICBpc1ZhbGlkU3RyaW5nKG90aGVyX2Nvc3RfYWN0aW9uX2lucHV0LnZhbHVlKSBcclxuICAgICAgICAgICAgICAgICAgICA/IHZhbGlkKG90aGVyX2Nvc3RfYWN0aW9uX2lucHV0KSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiB1bnZhbGlkKG90aGVyX2Nvc3RfYWN0aW9uX2lucHV0KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2JhcmVtZV9hY3Rpb24nOlxyXG4gICAgICAgICAgICAgICAgaXNWYWxpZFN0cmluZyhiYXJlbWVfYWN0aW9uX2lucHV0LnZhbHVlKSBcclxuICAgICAgICAgICAgICAgICAgICA/IHZhbGlkKGJhcmVtZV9hY3Rpb25faW5wdXQpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHVudmFsaWQoYmFyZW1lX2FjdGlvbl9pbnB1dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdmcmFpc19hY3Rpb24nOlxyXG4gICAgICAgICAgICAgICAgaXNWYWxpZEluamVjdChmcmFpc19hY3Rpb25faW5wdXQudmFsdWUpIFxyXG4gICAgICAgICAgICAgICAgICAgID8gdmFsaWQoZnJhaXNfYWN0aW9uX2lucHV0KSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiB1bnZhbGlkKGZyYWlzX2FjdGlvbl9pbnB1dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdmcmFpc19kZXBsYWNlbWVudF9hY3Rpb24nOlxyXG4gICAgICAgICAgICAgICAgaXNWYWxpZEluamVjdChmcmFpc19kZXBsYWNlbWVudF9hY3Rpb25faW5wdXQudmFsdWUpIFxyXG4gICAgICAgICAgICAgICAgICAgID8gdmFsaWQoZnJhaXNfZGVwbGFjZW1lbnRfYWN0aW9uX2lucHV0KSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiB1bnZhbGlkKGZyYWlzX2RlcGxhY2VtZW50X2FjdGlvbl9pbnB1dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdwYXllbWVudF9hY3Rpb24nOlxyXG4gICAgICAgICAgICAgICAgaXNWYWxpZE51bWJlcihwYXllbWVudF9hY3Rpb25faW5wdXQudmFsdWUpIFxyXG4gICAgICAgICAgICAgICAgICAgID8gdmFsaWQocGF5ZW1lbnRfYWN0aW9uX2lucHV0KSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiB1bnZhbGlkKHBheWVtZW50X2FjdGlvbl9pbnB1dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICd2YWxvcmlzYXRpb25fYWN0aW9uJzpcclxuICAgICAgICAgICAgICAgIGlzVmFsaWRJbmplY3QodmFsb3Jpc2F0aW9uX2FjdGlvbl9pbnB1dC52YWx1ZSkgXHJcbiAgICAgICAgICAgICAgICAgICAgPyB2YWxpZCh2YWxvcmlzYXRpb25fYWN0aW9uX2lucHV0KSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiB1bnZhbGlkKHZhbG9yaXNhdGlvbl9hY3Rpb25faW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnZG9uX2FjdGlvbic6XHJcbiAgICAgICAgICAgICAgICBpc1ZhbGlkSW5qZWN0KGRvbl9hY3Rpb25faW5wdXQudmFsdWUpIFxyXG4gICAgICAgICAgICAgICAgICAgID8gdmFsaWQoZG9uX2FjdGlvbl9pbnB1dCkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdW52YWxpZChkb25fYWN0aW9uX2lucHV0KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlICdmb2N1cyc6XHJcbiAgICAgICAgICAgICAgICByZXNldFZhbGlkKGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnY2xpY2snOlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3N1Ym1pdCc6XHJcbiAgICAgICAgICAgICAgICBzdWJtaXRWYWxpZGF0b3IoZXZlbnQsIGJvZHkuaWQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQgOlxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFdmVudCB0eXBlIG5vdCBmb3VuZCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwYXNzd29yZFZpZXdlcigpeyBcclxuICAgIHN3aXRjaChib2R5LmlkKVxyXG4gICAge1xyXG4gICAgICAgIGNhc2UgJ2hvbWUnOlxyXG4gICAgICAgICAgICB0b2dnbGVWaWV3KHBhc3N3b3JkX2lucHV0KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAncmVnaXN0ZXJfY3VzdG9tZXInOlxyXG4gICAgICAgICAgICB0b2dnbGVWaWV3KHBhc3N3b3JkX3VzZXJfaW5wdXQpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdyZWdpc3Rlcl9hc3NvYyc6XHJcbiAgICAgICAgICAgIHRvZ2dsZVZpZXcocGFzc3dvcmRfYXNzb2NfaW5wdXQpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHRvZ2dsZVZpZXcobm9kZSlcclxuICAgIHtcclxuICAgICAgICBzd2l0Y2gobm9kZS50eXBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2FzZSAncGFzc3dvcmQnOlxyXG4gICAgICAgICAgICAgICAgbm9kZS50eXBlID0gJ3RleHQnO1xyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRfc2hvd19lZGl0LnN0eWxlLmZpbGwgPSBcIiMxM2JkMjRcIjtcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkX3Nob3dfZWRpdC5zdHlsZS5maWxsT3BhY2l0eSA9IFwiMVwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3RleHQnOlxyXG4gICAgICAgICAgICAgICAgbm9kZS50eXBlID0gJ3Bhc3N3b3JkJztcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkX3Nob3dfZWRpdC5zdHlsZS5maWxsID0gXCJjdXJyZW50Q29sb3JcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc3VibWl0VmFsaWRhdG9yKGV2ZW50LCBwYWdlKSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGVycm9yQ291bnQgPSAwO1xyXG4gICAgZm9yIChsZXQgbm9kZSBpbiBkb21EYXRhW2JvZHkuaWRdKVxyXG4gICAge1xyXG4gICAgICAgIGlmIChub2RlWydoYXNfZXJyb3InXSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGVycm9yQ291bnQrKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoZXJyb3JDb3VudCA9PT0gMCkge1xyXG4gICAgICAgIHZhciBmb3JtID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpIT09J3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIikhPT1udWxsKSBcclxuICAgICAgICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKSBcclxuICAgICAgICAgICAgICAgIDogZmFsc2U7XHJcbiAgICAgICAgaWYoZm9ybSkge1xyXG4gICAgICAgICAgICBmb3JtLnN1Ym1pdCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignc3VibWl0IG5vZGUgbm90IGZvdW5kJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyBGVU5DVElPTiAjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG5cclxuXHJcbmZ1bmN0aW9uIHZhbGlkKG5vZGUpXHJcbntcclxuICAgIC8vIE9LIHN0eWxlXHJcbiAgICBub2RlLmNsYXNzTGlzdC5hZGQoXCJ2YWxpZFwiKTtcclxuICAgIC8vIHNhdmUgaW4gZG9tRGF0YSBhICFlcnJvclxyXG4gICAgZG9tRGF0YVtib2R5LmlkXVtub2RlLmNsYXNzTGlzdFswXV1bJ2hhc19lcnJvciddID0gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVudmFsaWQobm9kZSwgY2FuRXJyb3IgPSB0cnVlKVxyXG57XHJcbiAgICAvLyBOT0sgc3R5bGVcclxuICAgIG5vZGUuY2xhc3NMaXN0LmFkZChcInVudmFsaWRcIik7XHJcbiAgICAvLyBzYXZlIGluIGRvbURhdGEgYSBlcnJvclxyXG4gICAgZG9tRGF0YVtib2R5LmlkXVtub2RlLmNsYXNzTGlzdFswXV1bJ2hhc19lcnJvciddID0gdHJ1ZTtcclxuICAgIC8vIGVkaXQgZXJyb3IgZmllbGQgY29udGVudFxyXG4gICAgaWYgKGNhbkVycm9yID09PSB0cnVlKVxyXG4gICAge1xyXG4gICAgICAgIGRvbURhdGFbYm9keS5pZF1bbm9kZS5jbGFzc0xpc3RbMF1dWydlcnJvcl9ub2RlJ10uaW5uZXJIVE1MID0gZG9tRGF0YVtib2R5LmlkXVtub2RlLmNsYXNzTGlzdFswXV1bJ3RleHQnXTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVzZXRWYWxpZChub2RlLCBjYW5FcnJvciA9IHRydWUpXHJcbntcclxuICAgIC8vIGFwcGx5IGNvbmRpdGlvbmFsIHN0eWxlXHJcbiAgICBpZihub2RlLmNsYXNzTGlzdC5jb250YWlucyhcInZhbGlkXCIpKVxyXG4gICAge1xyXG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZShcInZhbGlkXCIpO1xyXG4gICAgfVxyXG4gICAgaWYobm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJ1bnZhbGlkXCIpKVxyXG4gICAge1xyXG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZShcInVudmFsaWRcIik7XHJcbiAgICB9XHJcbiAgICAvLyByZXNldCBpbiBkb21EYXRhIGEgZXJyb3JcclxuICAgIGRvbURhdGFbYm9keS5pZF1bbm9kZS5jbGFzc0xpc3RbMF1dWydoYXNfZXJyb3InXSA9IGZhbHNlO1xyXG4gICAgLy8gY2xlYW4gZXJyb3IgZmllbGRcclxuICAgIGlmIChjYW5FcnJvciA9PT0gdHJ1ZSlcclxuICAgIHtcclxuICAgICAgICBkb21EYXRhW2JvZHkuaWRdW25vZGUuY2xhc3NMaXN0WzBdXVsnZXJyb3Jfbm9kZSddLmlubmVySFRNTCA9ICcnO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpc1ZhbGlkU3RyaW5nKGZpZWxkKVxyXG57XHJcbiAgICByZXR1cm4gKGZpZWxkLmxlbmd0aCA+PSAzICYmIGZpZWxkLmxlbmd0aCA8PSA0NSkgPyB0cnVlIDogZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzVmFsaWRFbWFpbChmaWVsZClcclxue1xyXG4gICAgbGV0IHJlZ2V4ID0gL15bYS16QS1aMC05Ll8tXStAW2EtejAtOS5fLV17Mix9XFwuW2Etel17Miw0fSQvO1xyXG4gICAgcmV0dXJuIHJlZ2V4LnRlc3QoZmllbGQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1ZhbGlkVGVsKGZpZWxkKVxyXG57XHJcbiAgICBsZXQgcmVnZXggPSAvXig/OjB8XFwoP1xcKzMzXFwpP1xccz98MDAzM1xccz8pWzEtNzldKD86W1xcLlxcLVxcc10/XFxkXFxkKXs0fSQvO1xyXG4gICAgcmV0dXJuIHJlZ2V4LnRlc3QoZmllbGQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1ZhbGlkU2lyZXQoZmllbGQpIFxyXG57XHJcbiAgICBsZXQgcmVnZXggPSAvXlswLTlBLVpdezE0fSQvO1xyXG4gICAgcmV0dXJuIHJlZ2V4LnRlc3QoZmllbGQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1ZhbGlkQ3AoZmllbGQpXHJcbntcclxuICAgIGxldCByZWdleCA9IC9eWzAtOV17NX0kLztcclxuICAgIHJldHVybiByZWdleC50ZXN0KGZpZWxkKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNWYWxpZFBhc3N3b3JkKGZpZWxkKVxyXG57XHJcbiAgICBsZXQgcmVnZXggPSAvXig/PS4qW0EtWl0pKD89LipbYS16XSkoPz0uKlxcZCkoPz0uKlstKyEqJEAlX10pKFstKyEqJEAlX1xcd117NiwxNX0pJC87XHJcbiAgICByZXR1cm4gcmVnZXgudGVzdChmaWVsZCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzVmFsaWREaXNjaXBsaW5lKGZpZWxkKVxyXG57XHJcbiAgICByZXR1cm4gZmllbGQudmFsdWUgIT0gMCA/IHRydWUgOiBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNWYWxpZE51bWJlcihmaWVsZClcclxue1xyXG4gICAgbGV0IHJlZ2V4ID0gL15bMC05XSQvO1xyXG4gICAgcmV0dXJuIHJlZ2V4LnRlc3QoZmllbGQpO1xyXG59XHJcbi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMgQUpBWCBVVElMUyAjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbi8vIGNsYXNzIEFqYXhXb3JrZXIge1xyXG4vLyAgICAgY29uc3RydWN0b3IoX3VybCwgX21ldGhvZD1cIlBPU1RcIilcclxuLy8gICAgIHtcclxuLy8gICAgICAgICB0aGlzLnVybCA9IF91cmw7XHJcbi8vICAgICAgICAgdGhpcy5tZXRob2QgPSBfbWV0aG9kO1xyXG4vLyAgICAgICAgIHRoaXMuZXJyb3JBcnJheSA9IFtdO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIGFzeW5jIHNlbmQoX3Bvc3QpXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgdHJ5IHtcclxuLy8gICAgICAgICAgICAgc3dpdGNoKG1ldGhvZClcclxuLy8gICAgICAgICAgICAge1xyXG4vLyAgICAgICAgICAgICAgICAgY2FzZSAnUE9TVCc6IFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godGhpcy51cmwsIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogX3Bvc3QsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSdcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4vLyAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbi8vICAgICAgICAgICAgICAgICBjYXNlICdHRVQnOiBcclxuLy8gICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IGF3YWl0IGZldGNoKHRoaXMudXJsKTtcclxuLy8gICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4vLyAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yQXJyYXkucHVzaChuZXcgRXJyb3IoJ01ldGhvZCBhcmd1bWVudCBtdXN0IGJlIFBPU1Qgb3IgR0VUJykpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVycm9yQXJyYXk7XHJcbi8vICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbi8vICAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4vLyAgICAgICAgICAgICAgICAgY29uc3QganNvbkRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbi8vICAgICAgICAgICAgICAgICByZXR1cm4ganNvbkRhdGE7XHJcbi8vICAgICAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICAgICAgICB0aGlzLmVycm9yQXJyYXkucHVzaChuZXcgRXJyb3IoJ3NlcnZlciByZXNwb25zZSA6ICcgKyByZXNwb25zZS5zdGF0dXMpKTtcclxuLy8gICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVycm9yQXJyYXk7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4vLyAgICAgICAgICAgICB0aGlzLmVycm9yQXJyYXkucHVzaChlcnJvcik7XHJcbi8vICAgICAgICAgICAgIHJldHVybiB0aGlzLmVycm9yQXJyYXk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyBjb25zdCBzZW5kTG9naW5Gb3JtID0gIGFzeW5jICgpID0+IHtcclxuLy8gICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJycpO1xyXG4vLyAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbi8vICAgICAgICAgY29uc3QganNvbkRhdGEgPSAgYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4vLyAgICAgfSBlbHNlIHtcclxuXHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=