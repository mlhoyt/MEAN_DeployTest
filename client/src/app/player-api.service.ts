import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PlayerApiService {
  constructor(
    private _http: Http
  )
  {}

  create( item ) {
    return this._http.post( '/players', item )
      .map( data => data.json() )
      .toPromise();
  }

  read_all() {
    return this._http.get( '/players' )
      .map( data => data.json() )
      .toPromise();
  }

  read_one( pk ) {
    return this._http.get( '/players/${pk}' )
      .map( data => data.json() )
      .toPromise();
  }

  update( item, pk ) {
    return this._http.put( '/players/${pk}', item )
      .map( data => data.json() )
      .toPromise();
  }

  delete( pk ) {
    return this._http.delete( '/players/${pk}' )
      .map( data => data.json() )
      .toPromise();
  }
}
