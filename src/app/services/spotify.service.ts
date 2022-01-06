import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as crypto from 'crypto-js';
import { RandomStringService } from './random-string.service';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  client_id = environment.client_id;
  authorizeEndpoint = 'https://accounts.spotify.com/authorize';
  scope = 'user-read-private user-read-email';
  codeVerifier = this.randomString.generate(16);

  constructor(
    private http: HttpClient,
    private randomString: RandomStringService
  ) {}

  requestAuthorization(): void {
    const url = new URL(this.authorizeEndpoint);
    url.searchParams.append('client_id', this.client_id);
    url.searchParams.append('response_type', 'code');
    url.searchParams.append('redirect_uri', 'https://localhost:4200/callback');
    url.searchParams.append('state', this.randomString.generate(16));
    url.searchParams.append('code_challenge_method', 'S256');
    url.searchParams.append(
      'code_challenge',
      crypto.SHA256(this.codeVerifier).toString()
    );
    window.location.href = `${url}`;
  }
}
