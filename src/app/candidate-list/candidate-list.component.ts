import { Component, OnInit } from '@angular/core';
import { Candidate } from '../model/candidate';
import { CandidateServiceService } from '../service/candidate-service.service';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {

  candidates: Candidate[] = [];

  constructor(private candidateService: CandidateServiceService) {
  }

  ngOnInit() {
    this.candidateService.findAll().subscribe((data: Candidate[]) => {
      this.candidates = data;
    });
  }
}
