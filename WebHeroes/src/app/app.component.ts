import { formatNumber } from '@angular/common';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'WebHeroes';
  isShowDivIf = false;
  isShowDivIff = false;
  isShowDivIfff = false;
  contadorlike = 0;
  contadordislike = 0;
  contadorvotos = 0;
  contporcent = 0;
  contporcentt = 0;
  isShowDiv = false; 
  isShowDivv = false;
  isShowDivvv = false;     

  @ViewChild("graficaLike") graficaLike!: ElementRef;
  @ViewChild("graficaDislike") graficaDislike!: ElementRef;

  constructor(
    private renderer2: Renderer2,
  ){
    
  }
  ngOnInit() {
    
  }
  votoLike(votos:any){

    let buttonVale = votos.target.value;
    const divGrafica =  this.graficaLike.nativeElement;
    const graficaDislike = this.graficaDislike.nativeElement;
    
    console.log(buttonVale);
    

    if(buttonVale == "like"){

      // MOSTRAR O NO MOSTAR CAJAS 
      this.isShowDivIf = !this.isShowDivIf;
      this.isShowDivIff = !this.isShowDivIff;
      this.isShowDiv = !this.isShowDiv;
      this.isShowDivv = !this.isShowDivv;  

      //BARRA DE VOTACION LIKE
      this.contadorlike = (this.contadorlike + 10);
  
      
      this.contporcent = (this.contadorlike + this.contadordislike);
      this.contporcentt = (this.contadorlike / this.contporcent) * 100;
      var x = Math.round(this.contporcentt);
      
      if(x == 100){
        this.renderer2.setStyle(graficaDislike, 'display', "none");
      }else if( x < 100){
        //this.renderer2.setStyle(graficaDislike, 'transition', "all .1s ease");
        this.renderer2.setStyle(graficaDislike, 'display', "block");
       // this.renderer2.setStyle(divGrafica, 'transition', "all .1s ease");
        this.renderer2.setStyle(divGrafica, 'display', "block");     
      }

    
      divGrafica.innerHTML ="<h1>"+x+" %</h1>";
      this.renderer2.setStyle(divGrafica, 'width', x +"%");

      this.contporcent = (this.contadordislike + this.contadorlike);
      this.contporcentt = (this.contadordislike / this.contporcent) * 100;
      var x = Math.round(this.contporcentt);

      graficaDislike.innerHTML ="<h1>"+x+" %</h1>";
      this.renderer2.setStyle(graficaDislike, 'width', x+"%");
    
      
    }else if( buttonVale == "dislike"){

      // MOSTRAR O NO MOSTAR CAJAS 
      this.isShowDivIf = !this.isShowDivIf;
      this.isShowDivIff = this.isShowDivIff;
      this.isShowDivIfff = !this.isShowDivIfff;
      this.isShowDiv = !this.isShowDiv;
      this.isShowDivv = this.isShowDivv; 
      this.isShowDivvv = !this.isShowDivvv;

      //BARRA DE VOTACION DISLIKE

      this.contadordislike = (this.contadordislike + 10);
    

      this.contporcent = (this.contadordislike + this.contadorlike);
      this.contporcentt = (this.contadordislike / this.contporcent) * 100;
      var x = Math.round(this.contporcentt);


      if(x == 100){
        this.renderer2.setStyle(divGrafica, 'display', "none");
      }else if( x < 100){
        //this.renderer2.setStyle(graficaDislike, 'transition', "all .1s ease");
        this.renderer2.setStyle(graficaDislike, 'display', "block");
       // this.renderer2.setStyle(divGrafica, 'transition', "all .1s ease");
        this.renderer2.setStyle(divGrafica, 'display', "block");
        
      }


      graficaDislike.innerHTML ="<h1>"+x+" %</h1>";
      this.renderer2.setStyle(graficaDislike, 'width', x+"%");

      this.contporcent = (this.contadorlike + this.contadordislike);
      this.contporcentt = (this.contadorlike / this.contporcent) * 100;
      var x = Math.round(this.contporcentt);

    
      divGrafica.innerHTML ="<h1>"+x+" %</h1>";
      this.renderer2.setStyle(divGrafica, 'width', x+"%");

    }
  
  }
  totalVotos(){

  }

  ToReturn(){
    this.isShowDiv = !this.isShowDiv;
    this.isShowDivv = !this.isShowDivv;
    this.isShowDivvv = this.isShowDivvv;
    this.isShowDivIf = !this.isShowDivIf;
    this.isShowDivIff = !this.isShowDivIff;
    this.isShowDivIfff = this.isShowDivIfff;  
  }

  ToReturnn(){
    this.isShowDiv = !this.isShowDiv;
    this.isShowDivv = this.isShowDivv;
    this.isShowDivvv = !this.isShowDivvv;
    this.isShowDivIf = !this.isShowDivIf;
    this.isShowDivIff = this.isShowDivIff;
    this.isShowDivIfff = !this.isShowDivIfff;  
  }
  
}
