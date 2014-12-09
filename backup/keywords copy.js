var keywords = [
{"keyword":"Magnotta","count":13,"events":{"video":1,"video surveillance":1,"preuve":1,"passe":2,"Paris":1,"arrestation":1,"":3,"corps":2,"Problemes mentaux":1},"event":"passe"},
{"keyword":"procès","count":109,"events":{"arrestation":4,"lin jun":3,"preuve":3,"":30,"video":11,"corps":13,"Profil témoin":27,"procédure":5,"colis":1,"ambiance":1,"Paris":3,"juridique":2,"Problemes mentaux":3,"journalistique":2,"famille":1},"event":"corps"},
{"keyword":"Lin Jun","count":107,"events":{"Paris":6,"lin jun":13,"preuve":10,"appartement":4,"arme":1,"corps":13,"angrignon":2,"famille":1,"Profil témoin":1,"video surveillance":4,"video":2,"passe":4,"arrestation":21,"colis":1,"":21,"juridique":1,"Problemes mentaux":1,"ambiance":1},"event":"arrestation"},
{"keyword":"témoin","count":86,"events":{"arrestation":15,"Profil témoin":24,"":22,"colis":1,"depart":2,"ambiance":2,"Paris":9,"passe":3,"Berlin":5,"juridique":2,"Problemes mentaux":1},"event":"arrestation"},
{"keyword":"témoignage","count":45,"events":{"Paris":2,"lin jun":1,"procédure":3,"corps":4,"colis":3,"Berlin":1,"Profil témoin":8,"juridique":1,"arrestation":9,"":11,"Problemes mentaux":1,"video":1},"event":"arrestation"},
{"keyword":"vidéo","count":155,"events":{"lin jun":2,"Profil témoin":5,"juridique":2,"arrestation":20,"appartement":2,"famille":1,"angrignon":1,"Paris":8,"video":35,"ambiance":4,"video surveillance":7,"procédure":1,"preuve":9,"colis":2,"passe":10,"ordinateur":2,"depart":2,"Berlin":3,"":39},"event":"video"},
{"keyword":"psychiatre","count":73,"events":{"arrestation":4,"ambiance":1,"":49,"Problemes mentaux":5,"colis":1,"procédure":2,"juridique":2,"problemes mentaux":4,"Profil témoin":2,"passe":2,"preuve":1},"event":"Problemes_mentaux"},
{"keyword":"photo","count":78,"events":{"arrestation":10,"appartement":2,"preuve":21,"video":11,"colis":7,"":7,"passe":4,"ordinateur":1,"Paris":3,"depart":1,"arme":1,"Berlin":6,"lin jun":1,"Profil témoin":2,"corps":1},"event":"video"},
{"keyword":"Berlin","count":53,"events":{"arrestation":12,"passe":1,"ordinateur":4,"Paris":4,"Berlin":8,"Profil témoin":1,"preuve":2,"":17,"colis":2,"procédure":1,"problemes mentaux":1},"event":"arrestation"},
{"keyword":"Paris","count":55,"events":{"arrestation":12,"Profil témoin":1,"Paris":9,"preuve":2,"":24,"video":1,"Berlin":2,"passe":3,"juridique":1},"event":"arrestation"},
{"keyword":"police","count":77,"events":{"preuve":4,"arrestation":8,"":19,"video":2,"video surveillance":2,"Profil témoin":3,"colis":13,"passe":3,"Paris":9,"lin jun":3,"appartement":1,"Berlin":7,"corps":3},"event":"colis"},
{"keyword":"psy","count":66,"events":{"":45,"arrestation":6,"Profil témoin":2,"passe":9,"ambiance":1,"juridique":2,"Berlin":1},"event":"passe"},
{"keyword":"meurtre","count":58,"events":{"lin jun":1,"corps":1,"arrestation":6,"Profil témoin":2,"video":4,"passe":4,"preuve":3,"Paris":2,"video surveillance":1,"Berlin":1,"":32,"juridique":1},"event":"arrestation"},
{"keyword":"colis","count":54,"events":{"preuve":6,"video surveillance":2,"colis":37,"video":1,"arrestation":4,"Profil témoin":2,"":2},"event":"colis"},
{"keyword":"père","count":44,"events":{"":16,"arrestation":10,"famille":4,"Problemes mentaux":10,"passe":1,"juridique":1,"Profil témoin":1,"corps":1},"event":"arrestation"},
{"keyword":"preuve","count":43,"events":{"preuve":12,"arrestation":10,"Profil témoin":1,"ordinateur":1,"arme":1,"":8,"Berlin":1,"lin jun":2,"Paris":3,"famille":1,"juridique":2,"ambiance":1},"event":"arrestation"},
{"keyword":"corps","count":47,"events":{"preuve":8,"appartement":2,"corps":10,"angrignon":2,"arrestation":9,"colis":11,"passe":1,"Profil témoin":1,"":3},"event":"colis"},
{"keyword":"schizophrénie","count":41,"events":{"":36,"colis":1,"arrestation":1,"Paris":1,"Problemes mentaux":1,"ambiance":1},"event":"colis"},
{"keyword":"rencontre","count":78,"events":{"Paris":5,"Profil témoin":1,"arrestation":14,"angrignon":1,"colis":1,"passe":9,"preuve":1,"Berlin":4,"lin jun":1,"":39,"juridique":1,"problemes mentaux":1},"event":"arrestation"},
{"keyword":"Montréal","count":29,"events":{"colis":5,"Profil témoin":1,"Paris":3,"":11,"lin jun":1,"arrestation":7,"problemes mentaux":1},"event":"arrestation"},
{"keyword":"policier","count":58,"events":{"arrestation":20,"video surveillance":1,"colis":6,"preuve":4,"Berlin":8,"procédure":1,"video":2,"Profil témoin":5,"":4,"ordinateur":1,"Paris":4,"lin jun":1,"corps":1},"event":"arrestation"},
{"keyword":"temazepam","count":31,"events":{"corps":13,"Paris":1,"preuve":1,"":10,"arrestation":4,"lin jun":1,"passe":1},"event":"corps"},
{"keyword":"courriel","count":34,"events":{"video":2,"passe":11,"arrestation":3,"preuve":1,"ordinateur":1,"Paris":1,"":15},"event":"passe"},
{"keyword":"rencontré","count":78,"events":{"Paris":5,"Profil témoin":1,"arrestation":14,"angrignon":1,"colis":1,"passe":9,"preuve":1,"Berlin":4,"lin jun":1,"":39,"juridique":1,"problemes mentaux":1},"event":"arrestation"},
{"keyword":"SPVM","count":24,"events":{"arrestation":4,"Paris":1,"Profil témoin":8,"corps":2,"video":2,"colis":1,"preuve":2,"lin jun":1,"":2,"Problemes mentaux":1},"event":"arrestation"},
{"keyword":"Internet","count":36,"events":{"corps":1,"video":3,"colis":3,"preuve":1,"passe":3,"ordinateur":2,"arrestation":8,"Profil témoin":2,"":5,"Berlin":5,"Paris":2,"problemes mentaux":1},"event":"arrestation"},
{"keyword":"mère","count":31,"events":{"colis":1,"":17,"Berlin":1,"passe":2,"Problemes mentaux":2,"arrestation":7,"Profil témoin":1},"event":"arrestation"},
{"keyword":"Témoin","count":86,"events":{"arrestation":15,"Profil témoin":24,"":22,"colis":1,"depart":2,"ambiance":2,"Paris":9,"passe":3,"Berlin":5,"juridique":2,"Problemes mentaux":1},"event":"arrestation"},
{"keyword":"symptômes","count":34,"events":{"Problemes mentaux":1,"":28,"arrestation":3,"passe":2},"event":"arrestation"},
{"keyword":"victime","count":25,"events":{"corps":4,"preuve":1,"video surveillance":1,"Paris":2,"arrestation":5,"":5,"lin jun":1,"passe":2,"famille":4},"event":"arrestation"},
{"keyword":"trouvé","count":52,"events":{"appartement":2,"arrestation":4,"corps":4,"preuve":13,"angrignon":1,"Paris":2,"video":1,"colis":2,"":10,"passe":4,"ordinateur":3,"arme":1,"lin jun":2,"Berlin":2,"famille":1},"event":"arrestation"},
{"keyword":"images","count":27,"events":{"ordinateur":5,"":5,"video surveillance":8,"Paris":4,"Berlin":2,"video":1,"preuve":1,"arrestation":1},"event":"video_surveillance"},
{"keyword":"Sun","count":18,"events":{"passe":9,"preuve":1,"arrestation":2,"":6},"event":"passe"},
{"keyword":"voix","count":40,"events":{"":24,"Problemes mentaux":1,"arrestation":11,"passe":1,"juridique":2,"ambiance":1},"event":"arrestation"},
{"keyword":"diagnostic","count":27,"events":{"":21,"Problemes mentaux":2,"ambiance":1,"arrestation":1,"problemes mentaux":2},"event":"Problemes_mentaux"},
{"keyword":"psychiatrie","count":16,"events":{"Paris":1,"":13,"Profil témoin":1,"arrestation":1},"event":"Paris"},
{"keyword":"caméras","count":23,"events":{"video surveillance":9,"colis":2,"Paris":3,"appartement":1,"Berlin":1,"arrestation":3,"preuve":1,"video":1,"passe":1,"":1},"event":"video_surveillance"},
{"keyword":"fils","count":21,"events":{"colis":2,"Profil témoin":1,"":12,"famille":2,"Problemes mentaux":3,"passe":1},"event":"Problemes_mentaux"},
{"keyword":"café","count":26,"events":{"arrestation":8,"Berlin":12,"Profil témoin":1,"":1,"ordinateur":1,"Paris":2,"problemes mentaux":1},"event":"Berlin"},
{"keyword":"crime","count":42,"events":{"Paris":1,"preuve":4,"arrestation":3,"video":8,"passe":1,"":9,"Profil témoin":12,"juridique":3,"corps":1},"event":"video"},
{"keyword":"mort","count":31,"events":{"preuve":5,"corps":5,"":7,"colis":1,"Profil témoin":2,"arrestation":6,"passe":1,"video":1,"lin jun":1,"problemes mentaux":1,"appartement":1},"event":"arrestation"},
{"keyword":"personnalité","count":30,"events":{"passe":1,"arrestation":4,"":22,"appartement":1,"Paris":1,"Problemes mentaux":1},"event":"arrestation"},
{"keyword":"scie","count":26,"events":{"corps":1,"arme":9,"juridique":1,"arrestation":7,"ambiance":1,"":4,"passe":3},"event":"arme"},
{"keyword":"mémoire","count":18,"events":{"video":2,"preuve":6,"arrestation":2,"ordinateur":1,"":7},"event":"video"},
{"keyword":"entendre","count":16,"events":{"passe":1,"Profil témoin":2,"":8,"arrestation":2,"Paris":1,"juridique":1,"Problemes mentaux":1},"event":"arrestation"},
{"keyword":"expert","count":20,"events":{"Profil témoin":4,"Paris":1,"ordinateur":1,"":13,"Berlin":1},"event":"Paris"},
{"keyword":"surveillance","count":22,"events":{"angrignon":1,"colis":3,"video surveillance":6,"arrestation":2,"appartement":1,"Berlin":1,"Paris":4,"preuve":1,"video":1,"":2},"event":"video_surveillance"},
{"keyword":"crimes","count":23,"events":{"video":3,"":5,"preuve":1,"Profil témoin":10,"arrestation":1,"corps":2,"juridique":1},"event":"video"},
{"keyword":"journaliste","count":15,"events":{"colis":1,"passe":4,"arrestation":3,"Profil témoin":1,"":6},"event":"passe"},
{"keyword":"Toronto","count":18,"events":{"Paris":3,"arrestation":7,"":8},"event":"arrestation"},
{"keyword":"famille","count":16,"events":{"lin jun":2,"passe":1,"":7,"arrestation":3,"Paris":1,"famille":1,"Problemes mentaux":1},"event":"arrestation"},
{"keyword":"sang","count":22,"events":{"appartement":17,"preuve":2,"":2,"passe":1},"event":"appartement"},
{"keyword":"textos","count":14,"events":{"":13,"juridique":1},"event":"excluded"},
{"keyword":"Canada","count":17,"events":{"corps":1,"colis":6,"Profil témoin":1,"arrestation":3,"preuve":1,"":4,"Paris":1},"event":"colis"},
{"keyword":"problème","count":37,"events":{"procédure":1,"arrestation":10,"":21,"Problemes mentaux":2,"Paris":1,"passe":1,"famille":1},"event":"arrestation"},
{"keyword":"valise","count":20,"events":{"preuve":9,"appartement":2,"Paris":2,"corps":1,"":4,"arrestation":1,"colis":1},"event":"appartement"},
{"keyword":"suivi","count":17,"events":{"passe":1,"ambiance":1,"arrestation":7,"":8},"event":"arrestation"},
{"keyword":"hôpital","count":8,"events":{"":3,"Profil témoin":1,"arrestation":3,"problemes mentaux":1},"event":"arrestation"},
{"keyword":"psychose","count":20,"events":{"":16,"Paris":1,"arrestation":1,"passe":1,"problemes mentaux":1},"event":"Paris"},
{"keyword":"retrouvés","count":14,"events":{"Paris":4,"corps":2,"preuve":6,"Berlin":1,"Profil témoin":1},"event":"Paris"},
{"keyword":"ordi","count":15,"events":{"video":3,"Profil témoin":1,"ordinateur":7,"Berlin":1,"arrestation":1,"passe":1,"":1},"event":"ordinateur"},
{"keyword":"carte","count":16,"events":{"video":2,"preuve":6,"ordinateur":1,"Paris":3,"":2,"arrestation":1,"ambiance":1},"event":"Paris"},
{"keyword":"France","count":15,"events":{"Paris":2,"arrestation":5,"":6,"passe":1,"Profil témoin":1},"event":"arrestation"},
{"keyword":"troubles","count":15,"events":{"preuve":1,"":13,"Paris":1},"event":"Paris"},
{"keyword":"hallucinations","count":17,"events":{"arrestation":6,"":8,"passe":2,"Profil témoin":1},"event":"arrestation"},
{"keyword":"Miami","count":16,"events":{"":9,"arrestation":7},"event":"arrestation"},
{"keyword":"maladie","count":16,"events":{"":15,"arrestation":1},"event":"arrestation"},
{"keyword":"site","count":22,"events":{"arrestation":3,"Paris":6,"video":7,"passe":3,"":3},"event":"video"},
{"keyword":"contenait","count":13,"events":{"preuve":1,"angrignon":1,"video":1,"appartement":1,"colis":8,"":1},"event":"colis"},
{"keyword":"appartement","count":13,"events":{"appartement":6,"":3,"arrestation":3,"passe":1},"event":"appartement"},
{"keyword":"bouteille","count":17,"events":{"arrestation":4,"corps":6,"preuve":2,"appartement":1,"":2,"passe":1,"video":1},"event":"corps"},
{"keyword":"Chrétien","count":7,"events":{"colis":4,"Profil témoin":3},"event":"colis"},
{"keyword":"immeuble","count":4,"events":{"preuve":2,"video surveillance":2},"event":"video_surveillance"},
{"keyword":"Trammel","count":13,"events":{"passe":1,"Paris":2,"arrestation":2,"Berlin":1,"":7},"event":"Paris"},
{"keyword":"comportement","count":23,"events":{"Paris":2,"arrestation":5,"Berlin":2,"":14},"event":"arrestation"},
{"keyword":"schizophrène","count":30,"events":{"":20,"arrestation":6,"problemes mentaux":1,"corps":1,"ambiance":1,"Problemes mentaux":1},"event":"arrestation"},
{"keyword":"hospitalisé","count":14,"events":{"":10,"arrestation":3,"passe":1},"event":"arrestation"},
{"keyword":"médication","count":12,"events":{"":8,"arrestation":3,"video":1},"event":"arrestation"},
{"keyword":"pathologiste","count":9,"events":{"arrestation":1,"procédure":1,"ambiance":1,"corps":3,"preuve":1,"arme":1,"Profil témoin":1},"event":"corps"},
{"keyword":"filmée","count":22,"events":{"Profil témoin":1,"ambiance":1,"video":4,"video surveillance":4,"ordinateur":3,"depart":1,"Berlin":1,"Paris":1,"":5,"preuve":1},"event":"video"},
{"keyword":"témoins","count":4,"events":{"colis":1,"ambiance":1,"arrestation":1,"Problemes mentaux":1},"event":"colis"},
{"keyword":"filmées","count":12,"events":{"video surveillance":4,"video":2,"ordinateur":3,"depart":1,"Paris":1,"":1},"event":"video_surveillance"},
{"keyword":"l'école","count":12,"events":{"colis":6,"Profil témoin":1,"":2,"arrestation":3},"event":"colis"},
{"keyword":"envoyés","count":10,"events":{"corps":1,"colis":3,"preuve":2,"Profil témoin":2,"":1,"juridique":1},"event":"colis"},
{"keyword":"extraits","count":10,"events":{"video surveillance":1,"preuve":1,"ambiance":1,"Paris":2,"Berlin":1,"arrestation":1,"video":2,"":1},"event":"Paris"},
{"keyword":"devrait","count":8,"events":{"arrestation":3,"Berlin":2,"Profil témoin":1,"":2},"event":"arrestation"},
{"keyword":"prison","count":13,"events":{"":11,"Profil témoin":1,"procédure":1},"event":"excluded"},
{"keyword":"médicaments","count":21,"events":{"":17,"Problemes mentaux":1,"arrestation":3},"event":"arrestation"},
{"keyword":"conjoint","count":10,"events":{"lin jun":4,"":3,"arrestation":3},"event":"lin_jun"},
{"keyword":"appartement","count":13,"events":{"appartement":6,"":3,"arrestation":3,"passe":1},"event":"appartement"},
{"keyword":"ami","count":18,"events":{"lin jun":6,"arrestation":3,"Berlin":3,"":6},"event":"lin_jun"},
{"keyword":"biologiste","count":7,"events":{"corps":2,"Profil témoin":1,"":2,"arrestation":1,"preuve":1},"event":"corps"},
{"keyword":"vin","count":15,"events":{"corps":9,"appartement":1,"preuve":1,"":2,"arrestation":1,"passe":1},"event":"corps"},
{"keyword":"TRUE","count":7,"events":{"arrestation":4,"video":1,"ordinateur":1,"":1},"event":"arrestation"},
{"keyword":"Faith","count":7,"events":{"arrestation":3,"video":2,"ordinateur":1,"":1},"event":"arrestation"},
{"keyword":"Vancouver","count":15,"events":{"preuve":1,"colis":8,"Profil témoin":1,"arrestation":3,"Berlin":1,"":1},"event":"colis"},
{"keyword":"hôtel","count":9,"events":{"passe":2,"Paris":2,"":4,"preuve":1},"event":"passe"},
{"keyword":"entrevue","count":9,"events":{"passe":3,"arrestation":2,"":3,"famille":1},"event":"passe"},
{"keyword":"Londres","count":11,"events":{"passe":3,"Profil témoin":1,"arrestation":2,"":4,"ambiance":1},"event":"passe"},
{"keyword":"tués","count":13,"events":{"arrestation":4,"passe":5,"":4},"event":"passe"},
{"keyword":"reconnu","count":10,"events":{"famille":1,"ordinateur":1,"Paris":2,"depart":2,"Berlin":1,"":2,"juridique":1},"event":"Paris"},
{"keyword":"téléphone","count":13,"events":{"Paris":5,"arrestation":2,"Berlin":1,"":4,"ambiance":1},"event":"Paris"},
{"keyword":"aéroport","count":0,"events":{},"event":"excluded"},
{"keyword":"faits","count":12,"events":{"Profil témoin":1,"":10,"arrestation":1},"event":"arrestation"},
{"keyword":"Jewish","count":12,"events":{"":7,"arrestation":5},"event":"arrestation"},
{"keyword":"Ontario","count":10,"events":{"arrestation":5,"":4,"Problemes mentaux":1},"event":"arrestation"},
{"keyword":"trouble","count":25,"events":{"preuve":1,"":23,"Paris":1},"event":"Paris"},
{"keyword":"vidéo","count":155,"events":{"lin jun":2,"Profil témoin":5,"juridique":2,"arrestation":20,"appartement":2,"famille":1,"angrignon":1,"Paris":8,"video":35,"ambiance":4,"video surveillance":7,"procédure":1,"preuve":9,"colis":2,"passe":10,"ordinateur":2,"depart":2,"Berlin":3,"":39},"event":"video"},
{"keyword":"numérique","count":5,"events":{"video":2,"ordinateur":1,"arrestation":1,"preuve":1},"event":"video"},
{"keyword":"technologique","count":8,"events":{"video":1,"Profil témoin":6,"arrestation":1},"event":"video"},
{"keyword":"animaux","count":2,"events":{"passe":1,"arrestation":1},"event":"passe"},
{"keyword":"calme","count":14,"events":{"arrestation":5,"Berlin":1,"":7,"passe":1},"event":"arrestation"},
{"keyword":"médical","count":11,"events":{"arrestation":3,"":7,"passe":1},"event":"arrestation"},
{"keyword":"psychotiques","count":15,"events":{"":14,"passe":1},"event":"passe"},
{"keyword":"médicaux","count":11,"events":{"Problemes mentaux":1,"":7,"Profil témoin":1,"Paris":1,"arrestation":1},"event":"Problemes_mentaux"},
{"keyword":"psychiatrique","count":11,"events":{"Problemes mentaux":1,"Profil témoin":1,"":7,"arrestation":1,"problemes mentaux":1},"event":"Problemes_mentaux"},
{"keyword":"sexuelle","count":11,"events":{"corps":1,"Paris":1,"arrestation":4,"lin jun":2,"juridique":1,"":2},"event":"arrestation"},
{"keyword":"paranoïde","count":12,"events":{"":10,"arrestation":2},"event":"arrestation"},
{"keyword":"psychotique","count":30,"events":{"":28,"arrestation":1,"passe":1},"event":"arrestation"},
{"keyword":"auditives","count":9,"events":{"arrestation":4,"passe":1,"":4},"event":"arrestation"},
{"keyword":"juif","count":7,"events":{"":5,"appartement":1,"problemes mentaux":1},"event":"appartement"},
{"keyword":"anxieux","count":14,"events":{"arrestation":4,"":9,"video":1},"event":"arrestation"},
{"keyword":"malade","count":9,"events":{"":6,"arrestation":3},"event":"arrestation"},
{"keyword":"criminelle","count":7,"events":{"":6,"preuve":1},"event":"excluded"}
];