var ezLanguages = ezLanguages || {};

ezLanguages['fr'] = {
  // Social links
  "social+facebook":   "Suivez-nous sur Facebook",
  "social+twitter":    "Suivez-nous sur Twitter",
  "social+googleplus": "Suivez-nous sur Google+",
  "social+mail":       "Écrivez-nous à {{ mail }}",

  // login page
  "login+signin":                  "Connectez-vous",
  "login+signup":                  "Enregistrez-vous",
  "login+checking_users":          "Vérification des utilisateurs...",
  "login+install_successful":      "Installation réussie !",
  "login+set_admin_account":       "Enregistrez-vous dès à présent pour définir le compte administrateur.",
  "login+register_quick_and_easy": "Enregistrez-vous avant de pouvoir traiter vos logs, c'est simple et rapide.<br/>Vous pourrez ensuite suivre vos traitements et communiquer plus facilement avec l'équipe ezPAARSE.",
  "login+ezpaarse_is":             "ezPAARSE, c'est...",
  "login+ezpaarse_description":    "<p>Un <a href=\"{{ github }}\">logiciel libre</a> qui permet l’analyse, l’enrichissement et l’exploitation des logs d’accès aux ressources électroniques proposées par les <a href=\"{{ platforms }}\">plate-formes Web des éditeurs de littérature scientifique</a>. Il se présente sous la forme d'une application Web disposant d'un formulaire et d'une <a href=\"{{ api }}\">API</a> permettant l'ingestion manuelle et automatique des logs générées par les serveurs et proxy des établissements.</p>",
  "login+simple_tool":             "Un outil simple et efficace",
  "login+few_clic_enough":         "Quelques clics suffisent à l'installer et à analyser vos logs.",
  "login+responsive_team":         "Une équipe disponible et réactive",
  "login+problem_question":        "Un problème, une question, une suggestion ?",
  "login+interested":              "Ça nous intéresse !",
  "login+growing_community":       "Une communauté grandissante",
  "login+not_only_fr":             "Et pas seulement francophone !",
  "login+connecting":              "Connexion...",
  "login+error":                   "Erreur",
  "login+identifier":              "Identifiant",
  "login+email":                   "Adresse email",
  "login+password":                "Mot de passe",
  "login+confirm":                 "Confirmez votre mot de passe",
  "login+rememberme":              "Se souvenir de moi",
  "login+cancel":                  "Annuler",
  "login+submitting":              "Soumission...",
  "login+inform_team_warning":     "Vous venez d'installer ezPAARSE et vous vous apprétez à créer le compte administrateur. Avec votre accord, nous souhaiterions être informés de cette installation. L'adresse e-mail entrée ci-dessus et la version d'ezPAARSE installée seront envoyées à <strong>{{ recipients }}</strong>.",
  "login+inform_team":             "Informer l'équipe",

  // Slides on the login page
  "slider+raw_material":      "La matière première : vos logs.",
  "slider+use_this_way":      "Qui peuvent être exploitées de cette manière !",
  "slider+drag_drop":         "Glissez déposez vos fichiers de logs dans ezPAARSE pour les traiter",
  "slider+real_time_process": "Vos logs sont alors traitées en temps réel par ezPAARSE",
  "slider+progress":          "Vous êtes informés de l'état d'avancement du traîtement",
  "slider+click_to_dl":       "Il suffit de cliquer pour récupérer le résultat du traitement",
  "slider+many_informations": "Le résultat contient de nombreuses informations",
  "slider+many_platforms":    "De nombreuses plateformes d'éditeurs sont gérées par ezPAARSE",
  "slider+renders":           "Des renders LibreOffice et Excel sont disponibles pour une visualisation des résultats",
  "slider+render_example":    "Exemple de rendu LibreOffice : nombre de consultation par revue",

  // Layout
  "menu+admin":         "Administration",
  "menu+logout":        "Déconnexion",
  "menu+process_logs":  "Traitez vos logs",
  "menu+documentation": "Documentation",
  "footer+powered":     "Propulsé par <a href=\"{{ nodejs }}\" target=\"_blank\">Node.js</a> et <a href=\"{{ expressjs }}\" target=\"_blank\">Express 3</a>",

  // Process state button
  "state+idle":         "Aucun traitement en cours",
  "state+loading":      "Traitement en cours... {{ percent }}%",
  "state+finalisation": "Finalisation...",
  "state+success":      "Traitement terminé",
  "state+error":        "Erreur, traitement avorté",
  "state+aborted":      "Traitement annulé",

  // Form page
  "form+title":             "Préparation du traitement",
  "form+description":       "Indiquez ici les logs que vous désirez faire analyser par ezPAARSE. Vos logs nécessitent peut-être un paramétrage particulier pour qu'ezPAARSE les comprenne. Si nécessaire, <a ez-toggle-sidebar=\"{{ sidebarID }}\">contactez l'équipe ezPAARSE</a> pour une aide au paramétrage.",
  "form+settings":          "Paramètres",
  "form+logfiles":          "Fichiers de logs",
  "form+copy_paste":        "Copier/coller de logs",
  "form+autosort":          "tri automatique",
  "form+clear_files":       "Vider les fichiers",
  "form+drop_files_here":   "Déposez les fichiers ici",
  "form+click_to_add":      "Cliquez pour ajouter",
  "form+filename":          "Nom de fichier",
  "form+size":              "Taille",
  "form+n_selected_files":  "{{ number }} fichiers sélectionnés",
  "form+total_size":        "{{ size | bytesToSize }} au total",
  "form+process_files":     "Traiter les fichiers",
  "form+process_with_curl": "Traiter avec cURL",
  "form+paste_your_logs":   "Copiez/collez vos lignes de log ici",
  "form+process_lines":     "Traiter les lignes",
  "form+curl_instructions": "Copiez la commande ci-dessous pour exécuter la requête avec cURL en utilisant le paramétrage actuel du formulaire. Vous devrez peut-être modifier le chemin des fichiers ou ajouter des options telles que <code>--proxy</code> ou <code>--no-buffer</code>.",

  // Settings tab
  "settings+parameters":           "Paramétrage actuel",
  "settings+loading_predefined":   "Chargement des paramètres prédéfinis",
  "settings+modified":             "modifié",
  "settings+predefined_choice":    "Choix d'un paramétrage prédéfini...",
  "settings+no_result_for":        "Aucun résultat pour",
  "settings+default":              "par défaut",
  "settings+input":                "En entrée",
  "settings+output":               "En sortie",
  "settings+date_format":          "Format de date",
  "settings+date_format_help":     "Format de date des lignes de log.",
  "settings+relative_domain":      "Domaine relatif",
  "settings+relative_domain_help": "Domaine à utiliser pour les URLs relatives.",
  "settings+log_type":             "Type de log",
  "settings+auto_recognition":     "Reconnaissance auto",
  "settings+log_type_help":        "Plateforme d'origine des logs.",
  "settings+log_format":           "Format de log",
  "settings+log_format_help":      "Format des lignes de log (Ex: '%h %l %u %t %s %b'). <a href='{{ docURL }}' target='_blank'>En savoir plus</a>",
  "settings+result_format":        "Format du résultat",
  "settings+result_format_help":   "Format des données en sortie.",
  "settings+system_traces":        "Traces système",
  "settings+system_traces_help":   "Niveau de verbosité des traces laissées durant le traitement.",
  "settings+output_fields":        "Champs en sortie",
  "settings+output_fields_add":    "Ajouter...",
  "settings+output_fields_remove": "Enlever...",
  "settings+output_fields_help":   "Champs (en-têtes) à ajouter/enlever dans le fichier de sortie.",
  "settings+notifications":        "Notifications",
  "settings+notification_mails":   "Adresse(s) mail",
  "settings+notifications_help":   "Liste d'adresses email séparées par des virgules qui recevront une notification à la fin du traitement.",
  "settings+new":                  "Nouveau",
  "settings+headers":              "Headers (avancé)",
  "settings+headers_help":         "Liste de headers à ajouter à la requête. Si l'un d'eux fait doublon avec une autre option du formulaire, cette dernière est écrasée.",
  "settings+remember":             "Mémoriser mes paramètres",
  "settings+reset":                "Paramètres par défaut",
  "settings+name":                 "Nom",
  "settings+value":                "Valeur",

  // Feedback
  "feedback+title":             "Feedback",
  "feedback+subtitle":          "Votre avis nous intéresse !",
  "feedback+recipients":        "Votre feedback sera envoyé à <strong>{{ recipients }}</strong>. Une copie vous sera transmise à l'adresse indiquée ci-dessous.",
  "feedback+address":           "Votre adresse",
  "feedback+email":             "E-Mail",
  "feedback+comment":           "Votre commentaire",
  "feedback+what_do_you_think": "Que pensez-vous d'ezPAARSE ?",
  "feedback+send":              "Envoyer",
  "feedback+sent":              "Feedback envoyé",
  "feedback+thanks":            "Merci pour vos retours !",
  "feedback+no":                "Non",
  "feedback+report":            "Rapport du {{ date | date:\"dd-MM-yyyy 'à' HH:mm\" }}",
  "feedback+send_report":       "Envoyer un rapport de traitement",
  "feedback+send_browser":      "Envoyer la version de mon navigateur",
  "feedback+checking_server":   "Vérification du serveur de feedback",
  "feedback+error":             "Une erreur est survenue, veuillez réessayer",

  // Process page
  "process+title":              "Traitement en cours",
  "process+description":        "Vos logs sont en cours d'analyse par ezPAARSE. Vous pouvez suivre en temps réel l'état d'avancement du traitement et l'évolution des différents types de rejets.",
  "process+finalisation":       "Finalisation...",
  "process+done":               "Terminé",
  "process+error":              "Erreur",
  "process+cancelled":          "Annulé",
  "process+download":           "Télécharger le résultat",
  "process+can_start_download": "Vous pouvez d'ores et déjà débuter le téléchargement.",
  "process+cancel":             "Annuler",
  "process+new":                "Nouveau traitement",
  "process+state":              "État du traitement",
  "process+rejects":            "Rejets",
  "process+system_traces":      "Traces système",
  "process+report":             "Rapport",

  // Process page -> metrics tab
  "metrics+read_lines": "Lignes lues",
  "metrics+generated_ecs": "<popup data-variation=\"inverted\" data-content=\"Événements de consultation\">ECs</popup> générés",
  "metrics+duration": "Durée du traitement",
  "metrics+speed": "Vitesse",
  "metrics+platforms_count": "Plateformes reconnues",
  "metrics+html_count": "Consultations HTML",
  "metrics+pdf_count": "Consultations PDF",

  // Process page -> rejects tab
  "rejects+ignored_lines":         "Lignes ignorées",
  "rejects+denied_ecs":            "ECs en accès refusé",
  "rejects+duplicates":            "Doublons filtrés",
  "rejects+chrono_anomalies":      "Anomalies chronologiques",
  "rejects+ignored_domains":       "Domaines ignorés",
  "rejects+unknown_domains":       "Domaines inconnus",
  "rejects+unknown_formats":       "Formats inconnus",
  "rejects+unqualified_ecs":       "ECs non qualifiés",
  "rejects+missing_pkbs":          "PKBs manquantes",
  "rejects+relevant_lines":        "Lignes de log pertinentes lues : {{ nb | localNumber }}",
  "rejects+ignored_lines_help":    "Nombre de requêtes non pertinentes. Il s'agit principalement de téléchargements d'images, css ou scripts web sans rapport direct avec une ressource. Dans un log brut, ce chiffre est souvent élevé.",
  "rejects+denied_ecs_help":       "Liste des accès qui ont été refusés à l'utilisateur au moment du clic.<br/>Exemple : tentative d'accès à un article non négocié dans le bouquet de l'établissement.",
  "rejects+duplicates_help":       "Nombre de consultations ignorées car détectées comme des double-clics.",
  "rejects+chrono_anomalies_help": "Lignes ignorées en raison d'un mauvais ordre chronologique.",
  "rejects+ignored_domains_help":  "Les domaines ignorés.",
  "rejects+unknown_domains_help":  "Les domaines inconnus.",
  "rejects+unknown_formats_help":  "Les formats inconnus.",
  "rejects+unqualified_ecs_help":  "Les parseurs n'ont pas reconnu d'informations documentaires dans les URL de ces lignes de log. Elles sont donc ignorées par ezPAARSE.",
  "rejects+missing_pkbs_help":     "Les PKBs manquantes.",

  // Report (tab and fullpage)
  "report+title":          "Rapport de traitement",
  "report+subtitle":       "Réalisé le {{ date | date:\"dd-MM-yyyy 'à' HH:mm\" }}",
  "report+view_full_page": "Voir le rapport en pleine page",
  "report+general":        "Général",
  "report+rejets":         "Rejets",
  "report+dedoublonnage":  "Dédoublonnage",
  "report+stats":          "Statistiques",
  "report+files":          "Fichiers",
  "report+first_event":    "Première consultation",
  "report+system_traces":  "Traces système",
  "report+alerts":         "Alertes",
  "report+notifications":  "Notifications",
  "report+loading":        "Chargement...",
  "report+goto":           "Aller à :",
  "report+report_fail":    "Le rapport n'a pas pu être être récupéré.",
  "report+fail_cause_1":   "Avez-vous précisé un identifiant ?",
  "report+fail_cause_2":   "Le traitement associé est-il récent ?",
  "report+traces_fail":    "Impossible de récupérer les traces",

  // Admin page
  "admin+title":              "Administration",
  "admin+repositories":       "Dépôts",
  "admin+unknown_state":      "statut inconnu",
  "admin+updates_available":  "mises à jour disponibles",
  "admin+update":             "Mettre à jour",
  "admin+platforms_state":    "État des plateformes",
  "admin+platforms_uptodate": "les plateformes sont à jour",
  "admin+users":              "Utilisateurs",
  "admin+get_users_fail":     "Les utilisateurs n'ont pas pu être chargés.",
  "admin+name":               "Nom",
  "admin+group":              "Groupe",
  "admin+remove":             "Supprimer",
  "admin+password":           "Mot de passe"
};