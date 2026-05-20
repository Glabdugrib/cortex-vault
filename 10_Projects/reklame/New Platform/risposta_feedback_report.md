
Ciao a tutti,

vi confermiamo che sono stati completati i fix e le modifiche richieste:

1. Effettivamente non venivano richiesti gli status `paused`. Il problema è stato corretto e il comportamento è ora allineato ai requisiti concordati.
2. Report e ordinamenti:
    - aggiornato l’ordinamento delle colonne secondo la nuova lista fornita, sia nella tabella del report sia nell’export CSV;
    - modificato l’ordinamento di default aggiungendo un ordinamento secondario discendente per Volume;
    - corretto il bug relativo all’ordinamento del periodo, che risultava invertito tra mese e anno.
3. Aggiunto l’ID delle creatività, dove non già presente, sia nei filtri sia nella tabella.
4. Aggiunto l’ID degli affiliati, dove non già presente, sia nei filtri sia nella tabella.
5. Il toggle “Includi Plannings Senza Statistiche” serve esclusivamente a mostrare/nascondere in fondo al report le righe a 0, ovvero i casi in cui esistono plannings con volume > 0 ma senza alcun dato corrispondente su Tune (infatti l’unico KPI valorizzato è il volume).  
    Si tratta di una feature richiesta da Alberto Porelli il 18 Marzo e non è collegata alle righe con volume pari a 0.
6. Anche questo comportamento è stato risolto tramite il fix del punto 1, in quanto era sempre legato ai filtri sullo status.
7. Abbiamo verificato che il bug non fosse relativo alla selezione della country, ma al toggle “Includi Plannings Senza Statistiche”. Anche questo è stato corretto.
8. È stato inoltre aggiunto il campo opzionale “Offer” al report Affiliate, oltre ai campi inizialmente richiesti.

Extra:  
Durante le verifiche abbiamo individuato e corretto anche un ulteriore bug non segnalato, relativo alla scrollbar orizzontale della tabella, che in determinate condizioni non permetteva di visualizzare le ultime colonne.

Tutti i fix sono già disponibili sull’ambiente di REPL. Vi chiediamo di effettuare una verifica complessiva e di segnalarci eventuali ulteriori anomalie o comportamenti inattesi.

Grazie.