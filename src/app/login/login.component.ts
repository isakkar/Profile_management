import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  user = {
    email: '',
    password: '',
    role: '',
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    console.log('Tentative de connexion :', this.user);

    // Envoyer les données au back-end pour vérification
    this.http.post('http://localhost:3000/login', this.user).subscribe(
      (response) => {
        console.log('Connexion réussie !', response);
        // Gère la redirection ou le stockage du token
      },
      (error) => {
        console.error('Erreur de connexion :', error);
        alert('Email ou mot de passe incorrect.');
      }
    );
  }
}
