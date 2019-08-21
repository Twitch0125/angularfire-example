import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { AngularFirestore } from "@angular/fire/firestore";
import { Company } from "src/app/models/Company";

@Component({
  selector: "app-company-edit",
  templateUrl: "./company-edit.component.html",
  styleUrls: ["./company-edit.component.scss"]
})
export class CompanyEditComponent implements OnInit {
  company$: Observable<Company>;

  constructor(private db: AngularFirestore) {
    this.company$ = this.db
      .doc<Company>("companies/iy1PQa0DRHZcys8iJsdC")
      .valueChanges();
  }

  ngOnInit() {}
}
