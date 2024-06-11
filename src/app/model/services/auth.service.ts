import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { getAuth, signInWithPopup, GoogleAuthProvider, browserPopupRedirectResolver } from 'firebase/auth';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usuarioDados: any;

  constructor(
    private firebase: FirebaseService,
    private auth: AngularFireAuth,
    private router: Router,
    private ngZone: NgZone
  ) {
    this.auth.authState.subscribe(user => {
      if (user) {
        this.usuarioDados = user;
        localStorage.setItem('user', JSON.stringify(this.usuarioDados));
        user.getIdToken().then(token => {
          localStorage.setItem('authToken', token);
        });
      } else {
        localStorage.setItem('user', 'null');
        localStorage.removeItem('authToken');
      }
    });
  }

  isLoggedIn(): boolean {
    const authToken = localStorage.getItem('authToken');
    const loggedIn = !!authToken;
    console.log('User is logged in:', loggedIn, 'authToken:', authToken);
    return loggedIn;
  }

  public logar(email: string, password: string): Promise<void> {
    return this.auth.signInWithEmailAndPassword(email, password)
      .then(result => {
        console.log('Login result:', result);
        return result.user?.getIdToken().then(token => {
          localStorage.setItem('authToken', token);
          console.log('Token stored:', token);
        });
      })
      .catch(error => {
        console.error('Login error:', error);
        throw error;
      });
  }

  public registrar(email: string, password: string): Promise<void> {
    return this.auth.createUserWithEmailAndPassword(email, password)
      .then(result => {
        console.log('Register result:', result);
        return result.user?.getIdToken().then(token => {
          localStorage.setItem('authToken', token);
          console.log('Token stored:', token);
        });
      })
      .catch(error => {
        console.error('Register error:', error);
        throw error;
      });
  }

  public recuperarSenha(email: string): Promise<void> {
    return this.auth.sendPasswordResetEmail(email)
      .then(() => {
        console.log('Password reset email sent');
      })
      .catch(error => {
        console.error('Password reset error:', error);
        throw error;
      });
  }

  public deslogar(): Promise<void> {
    return this.auth.signOut()
      .then(() => {
        localStorage.removeItem('user');
        localStorage.removeItem('authToken');
        console.log('User logged out');
        this.ngZone.run(() => this.router.navigate(['logar']));
      })
      .catch(error => {
        console.error('Logout error:', error);
        throw error;
      });
  }

  public estaLogado(): boolean {
    const user: any = JSON.parse(localStorage.getItem('user') || 'null');
    return (user !== null);
  }

  public getUsuarioLogado() {
    const user: any = JSON.parse(localStorage.getItem('user') || 'null');
    return (user !== null) ? user : null;
  }

  public logarComGoogle(): Promise<void> {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    return signInWithPopup(auth, provider, browserPopupRedirectResolver)
      .then(result => {
        console.log('Google login result:', result);
        return result.user?.getIdToken().then(token => {
          localStorage.setItem('authToken', token);
          console.log('Token stored:', token);
        });
      })
      .catch(error => {
        console.error('Google login error:', error);
        throw error;
      });
  }
}


