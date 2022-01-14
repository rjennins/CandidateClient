import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidateServiceService } from '../service/candidate-service.service';
import { Candidate } from '../model/candidate';


@Component({
  selector: 'app-candidate-form',
  templateUrl: './candidate-form.component.html',
  styleUrls: ['./candidate-form.component.css']
})
export class CandidateFormComponent {

  candidate: Candidate;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private candidateService: CandidateServiceService) {
    this.candidate = new Candidate();
  }

  onSubmit() {
    this.candidateService.save(this.candidate).subscribe((result: any) => this.gotoCandidateList());
  }

  gotoCandidateList() {
    this.router.navigate(['/candidates']);
  }
}