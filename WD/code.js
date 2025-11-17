
var songrun=false;
var count=1;
var mod=1;
var path=["songs\\Saadda Haq.mp3"
,"songs\\Jee Karda.mp3"
,"songs\\Apna Time Aayega.mp3"
,"songs\\haareya.mp3"
,"songs\\ik vari aa.mp3"
,"songs\\main tera.mp3"
,"songs\\mercy.mp3"
,"songs\\musafir.mp3"
,"songs\\o sathi.mp3"
,"songs\\Choo Lo.mp3"
,"songs\\Befikar.mp3"
,"songs\\Jiyein Kyun.mp3"
,"songs\\Agar Tu Hota.mp3"
,"songs\\Say My Name.mp3"
,"songs\\Aam Jahe Munde.mp3"];

var sname=["Saadda Haq",
"Jee Karda",
"Apna Time Aayega",
"Haareya",
"Ik vari aa",
"main tera boyfriend",
"mercy",
"musafir",
"o sathi",
"Choo Loo",
"Befikar",
"Jiyein Kyun",
"Agar tu hota",
"Say My Name",
"Aam Jahe Munde",
];

var sd=["Artist: Mohit Chauan<br>Movie:Rockstar<br>Released: 2011",
"Artists: Ash King, Jigar Saraiya<br>Featured artists: Sidharth Malhotra, Raftaar<br>Movie: Badlapur<br>Released: 2017"
,"Artists: Ranveer Singh, Divine <br>Movie: Gully Boy<br>Released: 2019<br>"
,"Artist: Arijit Singh<br>Movie: Meri Pyaari Bindu<br>Released: 2017<br>Nominations: Mirchi Music Awards for Best Song Producer - Programming & Arranging"
,"Artist: Arijit Singh<br>Movie: Raabta<br>Released: 2017"
,"Artists: Arijit Singh, Neha Kakkar, Meet Bros<br>Movie: Raabta<br>Released: 2017<br>Composer(s): : Sohrabbudin (Original); Sourav Roy (Revamped).<br>Genre: Dance music"
,"Artist: Badshah<br>Released: 2017<br>Nominations: Mirchi Music Awards for Best Song Engineer - Recording and Mixing"
,"Artist: KK<br>Movie: Shab<br>Released: 2017"
,"Artist: Arijit Singh<br>Movie: Shab<br>Released: 2017"
,"Artists: Local Train<br>Movie: Aalas ka pedh<br>Released: 2015<br><br><br>Composer(s): Local Train",
"Artists: tanzeel<br><br>Released: 2021<br><br><br>Composer(s): Tanzeel"
,"Artists: tanzeel<br><br>Released: 2021<br><br><br>Composer(s): Tanzeel"
,"Artists:  Ankit Tiwari<br><br>Released: 2021<br><br><br>Composer(s):  Ankit Tiwari"
,"Artists: Kr$na<br><br>Released: 2021<br><br><br>Composer(s): Kr$na"
,"Artists: Parmish Verma<br><br>Released: 2023<br><br><br>Composer(s): Parmish Verma"];

var bool=[];
for(var i=0; i<sd.length; i++)
	bool[i]=false;

var icon=[
"images\\\\1.jpeg",
"images\\\\2.jpg",
"images\\\\3.jpeg",
"images\\\\4.jpg",
"images\\\\5.jpg",
"images\\\\6.jpg",
"images\\\\7.jpg",
"images\\\\8.jpg",
"images\\\\9.jpg",
"images\\\\10.jpg",
"images\\\\11.png",
"images\\\\12.png",
"images\\\\13.jpg",
"images\\\\14.jpg",
"images\\\\15.webp"
];

var mood=[["1","2","3","14"],["4","5","6","7","11"],["8","10","12","13"],["9","15"]];
var mmm=["1.png","1.png","1.png","2.png","2.png","2.png","2.png","3.png","4.png","3.png","2.png","3.png","3.png","1.png","4.png"];
        //1        2         3      4      5      6       7        8         9     10       11      12     13       14      15 
var songs=new Array(icon.length);
for (var i = 0; i<icon.length; i++) {
	songs[i]=new Array(4);
	songs[i][0]=path[i];
	songs[i][1]=sd[i];
	songs[i][2]=icon[i];
	songs[i][3]=mmm[i];
	console.log(songs[i][0]);
	console.log(songs[i][1]);
	console.log(songs[i][2]);
	var ins=document.createElement("div");
	ins.id='b'+i;
	//ins.onclick=function(){
	//next(this);
  	//};
	ins.setAttribute("class", "song");
	document.body.appendChild(ins);
	document.getElementById('b'+i).innerHTML=
	'<div id="pic" style=\'background-image: url(\"'+songs[i][2]+'\");\'>  <input type="button" id="'+"a"+i+'" class="play" > <input type="button" id="'+"c"+i+'" class="add">  </div><div id="data"><br><br>'+songs[i][1]+'</div>';
	document.getElementById('a'+i).onclick=function(){
		play(this);
	};
	document.getElementById('c'+i).onclick=function(){
		addq(this);
	};	
}




function setmod(elem){
	mod=elem.value;
	if(!songrun){
		if(mod==2)
			getTime();
		if(mod==3)
			rand_play();
	}
}

function play(elem){
	console.log(elem.id);
	var x = parseInt(elem.id.substring(1)); 
	
	var z=songs[x][0];
	document.getElementById("sname").innerHTML=sname[x];
	document.getElementById("sel").src= z;
	document.getElementById("main_slider").load();
	document.getElementById("main_slider").play();
	document.getElementById("emoji").style.backgroundImage="url('"+songs[x][3]+"')";
	songrun=true;

}

var eqc=1;
var sqc=1;

function addq(elem){
	console.log(elem.id);
	var x = parseInt(elem.id.substring(1)); 
	if(!songrun){
		var z=songs[x][0];
		document.getElementById("sname").innerHTML=sname[x];
		document.getElementById("sel").src= z;
		document.getElementById("main_slider").load();
		document.getElementById("main_slider").play();
		document.getElementById("emoji").style.backgroundImage="url('"+songs[x][3]+"')";
		songrun=true;		
		return;
	}
	if(bool[x]==true)
		return;
	
	bool[x]=true;
	var l=document.createElement("label");
	l.id="e"+eqc;
	l.name=x;
	l.innerHTML=sname[x]+"<br>";
	//var text=document.createTextNode(sname[x]+"<br>");
	//l.appendChild(text);
	document.getElementById("queue").appendChild(l);
	eqc=eqc+1;
}

function nextsong(){
	if(sqc==eqc){
				alert("Queue is empty.");
				return;
		}
		var elem=document.getElementById("e"+sqc);
			var xa=elem.name;
			var pa=songs[xa][0];
			bool[xa]=false;
			document.getElementById("sname").innerHTML=sname[xa];
			document.getElementById("sel").src= pa;
			document.getElementById("main_slider").load();
			document.getElementById("main_slider").play();
			document.getElementById("emoji").style.backgroundImage="url('"+songs[xa][3]+"')";
			
			songrun=true;
			document.getElementById("queue").removeChild(elem);	
			sqc=sqc+1;

}

function next_in_Q(){
			songrun=false;
			if(sqc==eqc){
				alert("Queue is empty.");
				return;
			}
			var elem=document.getElementById("e"+sqc);
			var xa=elem.name;
			var pa=songs[xa][0];
			document.getElementById("sname").innerHTML=sname[xa];
			document.getElementById("sel").src= pa;
			document.getElementById("main_slider").load();
			document.getElementById("main_slider").play();
			document.getElementById("emoji").style.backgroundImage="url('"+songs[xa][3]+"')";
			songrun=true;
			document.getElementById("queue").removeChild(elem);	
			sqc=sqc+1;
			}

function rand_play(){
	var index=Math.random()*path.length;
	index=parseInt(index);
	var pa=songs[index][0];
	document.getElementById("sname").innerHTML=sname[index];
	document.getElementById("sel").src= pa;
	document.getElementById("main_slider").load();
	document.getElementById("main_slider").play();
	document.getElementById("emoji").style.backgroundImage="url('"+songs[index][3]+"')";
	songrun=true;

}
function moody(val){
	var index=Math.random()*mood[val].length;
	index=parseInt(index);
	var pa=songs[mood[val][index]-1][0];
	document.getElementById("sname").innerHTML=sname[mood[val][index]-1];
	document.getElementById("sel").src= pa;
	document.getElementById("main_slider").load();
	document.getElementById("main_slider").play();
	document.getElementById("emoji").style.backgroundImage="url('"+songs[mood[val][index]-1][3]+"')";
	songrun=true;
}

async function getTime() {
                let value = await eel.getEmotion()();
                if(value=="angry")
                	moody(0);
                else if(value=="happy")
                	moody(1);
                else if(value=="sad")
                	moody(2);
                else
                	moody(3);
            }