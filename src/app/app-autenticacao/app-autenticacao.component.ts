import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autenticacao',
  templateUrl: './app-autenticacao.component.html',
  styleUrls: ['./app-autenticacao.component.css']
})
export class AppAutenticacaoComponent {

  msn: string = ""; // Mensagem da caixa de alerta do login
  msnStyle: string = ""; // Estilo da caixa de alerta do login

  email: string = "";
  password: string = "";

  attempts: number = 0;

  login(){
    if(this.email == "XPTO-21" && this.password == "Trocar@123" && this.attempts < 3){ //Verifica se a senha está certa e não está bloqueada
      this.msn = "Logado!";
      this.msnStyle = "alert alert-success";
      this.attempts = 0;
    }else if(this.email != "XPTO-21"){ // Verifica se o usuario é valido
      this.msn = "Acesso negado, usuário incorreto";
      this.msnStyle = "alert alert-danger";
    }else if(this.email == "XPTO-21" && this.password != "Trocar@123"){ // Verifica se a senha do usuario especifico está certo
      if(this.attempts < 3){
        this.msn = "Acesso negado, senha incorreta";
        this.msnStyle = "alert alert-danger";
        this.attempts++;
      }else{
        this.msn = "Usuário Bloqueado!";
        this.msnStyle = "alert alert-danger";
      }
    }
  }

}
