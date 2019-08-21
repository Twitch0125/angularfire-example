import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { Company } from "../models/Company";
import { Observable, from } from "rxjs";
import { of } from "rxjs/internal/observable/of";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CompanyService {
  private companyRef: AngularFirestoreDocument<Company>;

  constructor(private db: AngularFirestore) {
    this.companyRef = this.db.doc<Company>("companies/iy1PQa0DRHZcys8iJsdC");
  }

  getCompanyObservable(): Observable<Company> {
    return this.companyRef.valueChanges();
  }

  saveCompany(company: Company) {
    // this.companyRef
    //   .set(company)
    //   .then(_ => console.log("success on set"))
    //   .catch(error => console.log("set", error));

    from(this.companyRef.set(company)).pipe(
      catchError(error => {
        console.log("set", error);
        return of("Error");
      })
    );
  }
  editCompany(company: any) {
    this.companyRef
      .update(company)
      .then(_ => console.log("success on update"))
      .catch(error => console.log("remove", error));
  }
  deleteCompany() {
    this.companyRef.delete();
  }
}
