// vue and bootstrap initialization
require('./bootstrap');
window.Vue = require('vue');

// Multiple languages plugin registration
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

// vue components registration
// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('app', require('./components/app.vue').default),
Vue.component('languages', require('./components/languages.vue')),
Vue.component('banner', require('./components/banner.vue'));
Vue.component('navtabs',require('./components/navtabs.vue'));
Vue.component('mainfooter', require('./components/mainfooter.vue'));


// translations
const messages = {
  en: {
    message: {
// banner and footer
      banner: 'each app an original idea',
      footer: 'Visit us on ',
      policy: 'Privacy Policy',
      policy_content: 'This website does not collect or store any sort of personal information. However, anonymous information such as the web browser, the language preferences, time stamps etc. may be collected automatically due to the use of the typical internet technologies such as cookies and registry logs. In addition, similar information may be collected by third parties with which deepSeaCoding.com is associated, such as Google or the web providers. Such information is used to understand user practices and improve the user experience, measure site visits for statistical reasons, SEO ranking etc. If you disagree with the above practices you should stop using this website. For more information please contact us.',
      policy_date: 'Last update: ',
// navbar and close button
      but_webdev: 'Web Development',
      but_typo: 'Typography',
      but_design: 'Design & More!',
      but_contact: 'Contact',
      dismissTab: 'Click to dismiss',
// Web Development Tab
      web0: 'Services',
      web1: 'Design of unique and original responsive web applications',
      web1: 'Corporate sites - Personal blogs - E-shops',
      web2: 'Front end development with Javascrip, Vue JS and Bootstrap - Ux-Ui design',
      web3: 'Back end development with PhP, MySQL and Laravel &bull; Database creation',
      web4: 'Creation and use of custom templates in many popular Content Management Systems like Wordpress or Joomla',
      web5: 'Maintenance and upgrade of existing projects &bull Migration to the Laravel framework with fully customized CMS',
      web6: 'Web site localization and translation services (english/greek)',
      web_but: 'Press for a list of selected projects',
      webA: 'This site is a single page web app with many hidden features and great reactivity. Made mostly with the use of Vue JS for a great user experience and Bootstrap for maximum cross-device compatibility.',
      webB: 'The official web page of Ribbons of Euphoria is made with Laravel and Eloquent for the backend and has its own custom control panel and psychedelic design',
      webC: 'The official web page of the "Tetradia magazine" uses a custom Wordpress template, designed from scratch as a library for the 73 issues of this political journal',
      webD: 'The Kuakomekiki team webpage uses a customized Wordpress template and hand-painted graphics. Made in colaboaration with ',
      webE: 'and',
      webF: 'Maria Bacha.',
      webG: 'The website of an imaginary comic store. Based on the popular Wordpress/Woocommerce platform, it includes a customized theme',
// Typography tab
      typo1: 'Design of books, e-books and magazines for publishing companies and individuals',
      typo2: 'Design of book and magazine covers, leaflets and posters',
      typo3: 'Typesetting, OCR and text processing',
      typo4: 'Translations from English to Greek and localization services',
      typo5: 'Collaboration with major publishing houses',
      typo_but: 'Press for a list of colaborating publishing houses',
      typoA: 'Exclusive partnership in book and cover design',
      typoB: 'Exclusive partnership in magazine design',
      typoC: 'Book and cover design',
      typoD: 'Design of the "Kykladika" academic series',
      typoE: 'Book and cover design',
      typoF: 'Book and cover design',
      typoA1: 'Stochastis Editions',
      typoB1: 'Tetradia Magazine of Political Dialogue, Research and Critique',
      typoC1: 'Ropi Publications',
      typoD1: 'Gutenberg Publications',
      typoE1: 'Rizes Publications',
      typoF1: 'Doudoumis Publications',
// Design tab
      design1: 'Front-end services. Ux and Ui design',
      design2: 'Logo and icon design',
      design3: 'Image and sound editing',
      design4: 'Sound design and musical composition',
      design5: 'Interractive book apps and modern storytelling',
      design6: 'Video and board games development. Board games adaptation to digital form',
      design_but: 'Press for a list of selected projects',
      designA: 'Main theme from "Betsy the little witch-chef" book app',
      designB: 'Main theme from "Nelly and Tayle: The secret of the flying sneakers"',
      designC: 'Outro theme from "Nelly and Tayle: Catch the thief!"',
      designD: 'Free book apps for children produced under the "Kuakomekiki" label',
      designD1: 'Press here to visit the catalogue',
      designE: 'Your browser does not support the audio tag',
// Contact tab
      contact0: 'Contact',
      contact1: 'Contact person: (Mr.) Stathis Andreou',
      contact2: 'Telephone: ',
      contact_but: 'About deepSeaCoding.com',
      contactA: 'Hello and welcome to deepSeaCoding.com! My name is Stathis Andreou; I am a Desktop Publishing professional, translator, musician and full stack developer and this is my personal web page, where I offer a range of services, based in Athens/Greece. I have been working in the publishing industry for more than twenty years and as a book designer since 2008. In 2014 I started shifting from traditional typography to more modern approaches and forms of the narrative genre, such as e-books and book applications, with the "Kuakomekiki" team. In 2017 I took a step further and dived into web app developement and computer programming. The produce of merging those technologies with traditional typography has been project deepSeaCoding.com. Feel free to contact me at any time, I will be happy to answer any questions regarding this site or the provided services, or discuss with you ideas you would like to work on.',
      contactB: 'More about book apps from the "Kuakomekiki" team',
    }
  },
  el: {
    message: {
// banner and footer
      banner: 'κάθε εφαρμογή και μια πρωτότυπη ιδέα',
      footer: 'Επισκεφτείτε μας στο ',
      policy: 'Πολιτική Απορρήτου',
      policy_content: 'Ο παρόν ιστότοπος δεν διαθέτει φόρμες συλλογής προσωπικών δεδομένων και, ως εκ τούτου, δεν αποθηκεύει προσωπικά δεδομένα. Ωστόσο, πληροφορίες όπως o τύπος του περιηγητή, γλωσσικές προτιμήσεις, χρονικές σφραγίδες κ.ά. μπορεί να συλλέγονται αυτόματα λόγω της χρήσης των τυπικών τεχνολογιών διαδικτύου, όπως τα cookies και τα μητρώα συμβάντων. Επιπρόσθετα, αντίστοιχες πληροφορίες μπορεί να συλλέγονται από συνεργαζόμενα με την deepSeaCoding.com τρίτα μέρη, όπως η Google ή οι συνεργαζόμενοι πάροχοι ιστού, για λόγους βελτιστοποίησης της εμπειρίας χρήστη, μέτρησης επικέψεων, κατάταξης στης μηχανές αναζήτησης κ.ο.κ. Εάν διαφωνείτε με την παραπάνω πρακτική παρακαλέιστε να σταματήσετε τη χρήση του παρόντος ιστότοπου. Για οποιαδήποτε πληροφορία μπορείτε να απευθύνεστε στη διαχείριση του ιστότοπου. Πληροφορίες στον σύνδεσμο "Επικοινωνία".',
      policy_date: 'Τελευταία ενημέρωση: ',
// navbar and close button
      but_webdev: 'Ανάπτυξη Ιστού',
      but_typo: 'Τυπογραφία',
      but_design: 'Γραφικές Τέχνες & Άλλα!',
      but_contact: 'Επικοινωνία',
      dismissTab: 'Πατήστε για κλείσιμο',
// Web Development Tab
      web0: 'Υπηρεσίες',
      web1: 'Σχεδιασμός πρωτότυπων εφαρμογών ιστού για υπολογιστές, τάμπλετ και κινητά τηλέφωνα',
      web2: 'Ηλεκτρονικά καταστήματα  - Εταιρικές ιστοσελίδες  - Προσωπικά ιστολόγια',
      web3: 'Γραφιστική Επιμέλεια και Κατασκευή Βάσης Δεδομένων',
      web4: 'Προγραμματισμός με Laravel, Vue JS και Bootstrap. Εναλλακτικά κατασκευή με τη χρήση template στην πλατφόρμα της επιλογής σας (Wordpress, Joomla, κ.ο.κ)',
      web5: 'Συντήρηση και αναβάθμιση υπαρχουσών ιστοσελίδων',
      web6: 'Μετάφραση ιστοσελίδων στα ελληνικά ή στα αγγλικά',
      web_but: 'Πατήστε για μια λίστα επιλεγμένων έργων',
      webA: 'Η παρούσα ιστοσελίδα αποτελεί εφαρμογή διαδικτύου μιας σελίδας και διαθέτει διαδραστικότητα και πολλά κρυφά χαρακτηριστικά. Είναι κατασκευασμένη σε Vue JS για βέλτιστη εμπειρία χρήστη και Boostrap 4 για σωστή απεικόνιση σε όλες τις συσκευές',
      webB: 'Η ιστοσελίδα των Ribbons of Euphoria είναι κατασκευασμένη σε Laravel για δυνατότητα χρήσης βάσης δεδομένων, με δικό της πίνακα ελέγχου',
      webC: 'Η ιστοσελίδα του περιοδικού "Τετράδια" είναι κατασκευασμένη πάνω στην πλατφόρμα Wordpress με σχεδιασμένο εξαρχής template',
      webD: 'Η ιστοσελίδα της ομάδας Kuakomekiki είναι κατασκευασμένη πάνω στην πλατφόρμα Wordpress με τροποποιημένο προϋπάρχον template. Σε συνεργασία με την ',
      webE: 'και την',
      webF: 'Μάρια Μπαχά.',
      webG: 'Η ιστοσελίδα ενός εικονικού καταστήματος κόμικ, με προσαρμοσμένο θέμα. Βασισμένh στη δημοφιλή πλατφόρμα Wordpress με τη χρήση του πρόσθετου Woocommerce',

// Typography tab
      typo1: 'Σχεδιασμός βιβλίων, ηλεκτρονικών βιβλίων και περιοδικών για εκδότες και ιδιώτες',
      typo2: 'Σχεδιασμός εξωφύλλων, εντύπων, φυλλαδίων, καρτών, αφισσών κ.ο.κ. παντός σχήματος',
      typo3: 'Στοιχειοθεσία, μετατροπές κειμένου σε ηλεκτρονική μορφή, παντός είδους επεξεργασία',
      typo4: 'Eπιμέλειες και μεταφράσεις',
      typo5: 'Συνεργασία με γνωστούς εκδοτικούς οίκους',
      typo_but: 'Πατήστε για μια λίστα συνεργαζόμενων εκδοτικών οίκων',
      typoA1: 'Εκδόσεις Στοχαστής',
      typoA: 'Σχεδιασμός βιβλίων και εξωφύλλων',
      typoB1: 'Περιοδικό Τετράδια Πολιτικού διαλόγου Έρευνας και Κριτικής',
      typoB: 'Σχεδιασμός του περιοδικού και του εξωφύλλου',
      typoC1: 'Εκδόσεις Ροπή',
      typoC: 'Σχεδιασμός βιβλίων και εξωφύλλων',
      typoD1: 'Εκδόσεις Gutenberg',
      typoD: 'Σχεδιασμός της σειράς "Κυκλαδικά"',
      typoE1: 'Εκδόσεις Ρίζες',
      typoE: 'Σχεδιασμός βιβλίων και εξωφύλλων',
      typoF1: 'Εκδόσεις Ντουντούμη',
      typoF: 'Σχεδιασμός βιβλίων και εξωφύλλων',
// Design tab
      design1: 'Σχεδιασμός Ux και Ui',
      design2: 'Σχεδιασμός λογοτύπων και γραφιστικού υλικού',
      design3: 'Επεξεργασία εικόνας και ήχου',
      design4: 'Κατασκευή ηχητικών εφέ και μουσική σύνθεση',
      design5: 'Διαδραστικά βιβλία και ηλεκτρονικές μορφές αφήγησης',
      design6: 'Σχεδιασμός και ανάπτυξη βιντεοπαιχνιδιών και επιτραπεζίων. Προσαρμογή επιτραπέζιων παιχνιδιών σε ηλεκτρονική μορφή',
      design_but: 'Πατήστε για μια λίστα ενδεικτικών έργων',
      designA: 'Το εισαγωγικό θέμα από το διαδραστικό ηλεκτρονικό βιβλίο "Μπέτση, η μικρή μάγισσα-σεφ"',
      designB: 'Το εισαγωγικό θέμα από το διαδραστικό ηλεκτρονικό βιβλίο "Νέλλη και Τέηλ: Το μυστικό των ιπτάμενων παπουτσιών"',
      designC: 'Το θέμα των τίτλων τέλους από το διαδραστικό ηλεκτρονικό βιβλίο "Νέλλη και Τέηλ: Πιάστε τον κλέφτη!"',
      designD: 'Δωρεάν διαδραστικά βιβλία από την ομάδα "Kuakomekiki"',
      designD1: 'Πατήστε εδώ για μετάβαση',
      designE: 'Ο περιηγητής σας δεν υποστηρίζει λειτουργία ήχου',
// Contact tab
      contact0: 'Επικοινωνία',
      contact1: 'Υπεύθυνος Επικοινωνίας: Στάθης Ανδρέου',
      contact2: 'Τηλέφωνο: ',
      contact_but: 'Περισσότερα για την deepSeaCoding.com',
      contactA: 'Καλωσήρθατε στην deepSeaCoding.com! Ονομάζομαι Στάθης Ανδρέου και εργάζομαι στον χώρο των έντυπων και ψηφιακών εκδόσεων, των μεταφράσεων, καθώς και της κατασκευής ιστοσελίδων, με έδρα την Αθήνα. Αυτή είναι η προσωπική μου ιστοσελίδα, όπου μπορείτε να ενημερωθείτε για την γκάμα των παρεχόμενων υπηρεσιών. Έχω εργαστεί στον εκδοτικό χώρο για πάνω από είκοσι χρόνια και πάνω στον σχεδιασμό βιβλίων από το 2008. Το 2014 επεκτάθηκα στις σύγχρονες μορφές αφήγησης, όπως τα e-book και οι εφαρμογές βιβλίου (book apps) με την ομάδα "Κuakomekiki". Το 2017 προχώρησα στον προγραμματισμό και την ανάπτυξη εφαρμογών ιστού και αποτέλεσμα του μπολιάσματος αυτών των σύχρονων τεχνολογιών με την παραδοσιακή τυπογραφία υπήρξε η deepSeaCoding.com. Μπορείτε να επικοινωνήσετε μαζί μου και θα χαρώ να σας ενημερώσω γύρω από τις παρεχόμενες υπηρεσίες ή να μελετήσουμε μαζί τον τρόπο υλοποίησης κάποιας ιδέας που τυχόν έχετε.',
      contactB: 'Περισσότερα για τις εφαρμογές βιβλίου από την ομάδα Kuakomekiki"',
    }
  }
}


//Old vue instance initialization
// const app = new Vue({
//     el: '#app',
// });

//Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'el', // set locale
  messages,

   // set locale messages

})

// Create a Vue instance with `i18n` option
new Vue({ i18n }).$mount('#app')
