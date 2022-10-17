// JS file
// Name: Andrea Cavalcanti Nascimento
// Student Number: 301250129
// Date: Oct xxth, 2022

//Index Controller
export function displayHomePage(req,res,next){
    res.render('index', { title: 'Hello!', page: 'home' });
};

export function displayAboutPage(req,res,next){
    res.render('index', { title: 'About', page: 'about' });
};

export function displayProjectsPage(req,res,next){
    res.render('index', { title: 'Projects', page: 'projects' });
};

export function displayServicesPage(req,res,next){
    res.render('index', { title: 'Services', page: 'services' });
};

export function displayContactPage(req,res,next){
    res.render('index', { title: "Let's talk.", page: 'contact' });
};