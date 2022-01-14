import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import { Report } from '../../models/report';
import { ReportService } from '../../services/report.service';

@Component({
  selector: 'ed-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit, OnDestroy {

  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject<any>();
  reports: Report[] = [];
  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,
      dom: 'Bfrtip',
        buttons: [
             'print'
        ]
    };
    this.reportService.getAll().subscribe(data => {
      this.reports = data.report;
    this.dtTrigger.next(1);
    })
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
    
  }

}
