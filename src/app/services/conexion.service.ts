import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface notas { textoNota: string; }

@Injectable({
  providedIn: 'root'
})

export class ConexionService {
  private notasCollection: AngularFirestoreCollection<notas>;
  private notaDoc!: AngularFirestoreDocument<notas>;
  notas: Observable<notas[]>;
  constructor(private firestore:AngularFirestore) { 
    this.notasCollection = firestore.collection<notas>('notas');
    // this.notas = this.notasCollection.valueChanges();
    this.notas = this.notasCollection.snapshotChanges().pipe( 
      map(actions =>  actions.map(a => {
      const data = a.payload.doc.data() as notas;
      const id = a.payload.doc.id;
      return { id, ...data };
      }))
    );
  }
  
  listaNota(){
    return this.notas;
  }
  agregarNota(notas: notas) {
    this.notasCollection.add(notas);
  }
  eliminarNota(nota: any){
    this.notaDoc=this.firestore.doc<notas>(`notas/${nota.id}`);
    this.notaDoc.delete();
  }
}
