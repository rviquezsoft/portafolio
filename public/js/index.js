
 var main=document.querySelector('#main');
var iniciobtn=document.querySelector('#iniciobtn');
 var whobtn=document.querySelector('#whobtn');
 var conobtn=document.querySelector('#conobtn');
 var servicesbtn=document.querySelector('#servicesbtn');
 var portafoliobtn=document.querySelector('#portafoliobtn');
 var downloadbtn=document.querySelector('#downloadbtn');
 var contactbtn=document.querySelector('#contactbtn');


var htmlinicio=` <div class="inicio">
<div class="texto">
    <span>Hola.</span>
</div>
<div class="texto1">
<span>Soy Richard Víquez.</span>
</div>
<div class="texto2">
<span>-Programador especialista en desarrollo para móviles y web-</span>
</div>
</div>`;

var htmlwho=`   <div class="who">
<h1>¿Quién soy?</h1>
<p>
    Soy un amante de la tecnología,
    apasionado por aprender nuevos lenguajes de programación 
    y ver como van evolucionando a través de los nuevos cambios a los cuales me logro adaptar
    muy bien. He trabajado en empresas de software y también como freelancer por lo cual
    he logrado adquirir un poco de experiencia desarrollando software. Estoy abierto el aprendizaje
    constante de nuevas tecnologías y adaptarme a los nuevos cambios y/o descubriemintos de el área
    de la ingeniería de software.
</p>
</div>`;

var htmlConocimientos=` <div>
<div class="cards">
    <img  
    src="img/js.png" 
    alt="" srcset="">
    <div>
        <p>Javascript</p>
    </div>
</div>
<div class="cards">
    <img  
    src="img/mysql.png" 
    alt="" srcset="">
    <div>
        <p>Mysql</p>
    </div>
</div>
<div class="cards">
    <img  
    src="img/oracle-logo.png" 
    alt="" srcset="">
    <div>
        <p>Oracle</p>
    </div>
</div>
<div class="cards">
    <img  
    src="img/java.png" 
    alt="" srcset="">
    <div>
        <p>Java</p>
    </div>
</div>

</div>

<div>
<div class="cards">
    <img  
    src="img/react.png" 
    alt="" srcset="">
    <div>
        <p>React</p>
    </div>
</div>
<div class="cards">
    <img  
    src="img/csharp.png" 
    alt="" srcset="">
    <div>
        <p>C Sharp</p>
    </div>
</div>
<div class="cards">
    <img  
    src="img/net.png" 
    alt="" srcset="">
    <div>
        <p>.NET</p>
    </div>
</div>
<div class="cards">
    <img  
    src="img/bootstrap.png" 
    alt="" srcset="">
    <div>
        <p>Bootstrap</p>
    </div>
</div>

</div>

<div>
<div class="cards">
    <img  
    src="img/sq.jpeg" 
    alt="" srcset="">
    <div>
        <p>SQL Server</p>
    </div>
</div>
<div class="cards">
    <img  
    src="img/android.png" 
    alt="" srcset="">
    <div>
        <p>Android</p>
    </div>
</div>
<div class="cards">
    <img  
    src="img/ios.jpeg" 
    alt="" srcset="">
    <div>
        <p>IOS</p>
    </div>
</div>
<div class="cards">
    <img  
    src="img/azure.png" 
    alt="" srcset="">
    <div>
        <p>Azure</p>
    </div>
</div>

</div>


<div>
<div class="cards">
    <img  
    src="img/swift.jpeg" 
    alt="" srcset="">
    <div>
        <p>Swift</p>
    </div>
</div>
<div class="cards">
    <img  
    src="img/vs.jpeg" 
    alt="" srcset="">
    <div>
        <p>Visual Studio</p>
    </div>
</div>
<div class="cards">
    <img  
    src="img/node.png" 
    alt="" srcset="">
    <div>
        <p>Node js</p>
    </div>
</div>
<div class="cards">
    <img  
    src="img/rest.png" 
    alt="" srcset="">
    <div>
        <p>Api Rest</p>
    </div>
</div>

</div>`;


var htmlservices=`<div class="servicess">
<div class="ss">
    <p>Paginas web</p>
</div>
<div class="ss">
   <p>Paginas web</p>
</div>
<div class="ss">
   <p>Paginas web</p>
</div>
<div class="ss">
   <p>Paginas web</p>
</div>
<div class="ss">
   <p>Paginas web</p>
</div>
<div class="ss">
   <p>Paginas web</p>
</div>
<div class="ss">
   <p>Paginas web</p>
</div>`;

// window.addEventListener('load',()=>{
//     main.innerHTML=htmlinicio;
// });


iniciobtn.addEventListener('click',(e)=>{
    e.preventDefault();
    main.innerHTML=htmlinicio;
});

whobtn.addEventListener('click',(e)=>{
    e.preventDefault();
    main.innerHTML=htmlwho;
});

conobtn.addEventListener('click',(e)=>{
    e.preventDefault();
    main.innerHTML=htmlConocimientos; 
});

servicesbtn.addEventListener('click',(e)=>{
    e.preventDefault();
    main.innerHTML=htmlservices;
});

portafoliobtn.addEventListener('click',(e)=>{
    e.preventDefault();
    main.innerHTML=htmlservices;
});