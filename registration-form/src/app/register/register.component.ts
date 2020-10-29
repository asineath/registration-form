import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MockService } from '../services/mock.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  states = [
      {
          "name": "Alabama",
          "abbreviation": "AL"
      },
      {
          "name": "Alaska",
          "abbreviation": "AK"
      },
      {
          "name": "American Samoa",
          "abbreviation": "AS"
      },
      {
          "name": "Arizona",
          "abbreviation": "AZ"
      },
      {
          "name": "Arkansas",
          "abbreviation": "AR"
      },
      {
          "name": "California",
          "abbreviation": "CA"
      },
      {
          "name": "Colorado",
          "abbreviation": "CO"
      },
      {
          "name": "Connecticut",
          "abbreviation": "CT"
      },
      {
          "name": "Delaware",
          "abbreviation": "DE"
      },
      {
          "name": "District Of Columbia",
          "abbreviation": "DC"
      },
      {
          "name": "Federated States Of Micronesia",
          "abbreviation": "FM"
      },
      {
          "name": "Florida",
          "abbreviation": "FL"
      },
      {
          "name": "Georgia",
          "abbreviation": "GA"
      },
      {
          "name": "Guam",
          "abbreviation": "GU"
      },
      {
          "name": "Hawaii",
          "abbreviation": "HI"
      },
      {
          "name": "Idaho",
          "abbreviation": "ID"
      },
      {
          "name": "Illinois",
          "abbreviation": "IL"
      },
      {
          "name": "Indiana",
          "abbreviation": "IN"
      },
      {
          "name": "Iowa",
          "abbreviation": "IA"
      },
      {
          "name": "Kansas",
          "abbreviation": "KS"
      },
      {
          "name": "Kentucky",
          "abbreviation": "KY"
      },
      {
          "name": "Louisiana",
          "abbreviation": "LA"
      },
      {
          "name": "Maine",
          "abbreviation": "ME"
      },
      {
          "name": "Marshall Islands",
          "abbreviation": "MH"
      },
      {
          "name": "Maryland",
          "abbreviation": "MD"
      },
      {
          "name": "Massachusetts",
          "abbreviation": "MA"
      },
      {
          "name": "Michigan",
          "abbreviation": "MI"
      },
      {
          "name": "Minnesota",
          "abbreviation": "MN"
      },
      {
          "name": "Mississippi",
          "abbreviation": "MS"
      },
      {
          "name": "Missouri",
          "abbreviation": "MO"
      },
      {
          "name": "Montana",
          "abbreviation": "MT"
      },
      {
          "name": "Nebraska",
          "abbreviation": "NE"
      },
      {
          "name": "Nevada",
          "abbreviation": "NV"
      },
      {
          "name": "New Hampshire",
          "abbreviation": "NH"
      },
      {
          "name": "New Jersey",
          "abbreviation": "NJ"
      },
      {
          "name": "New Mexico",
          "abbreviation": "NM"
      },
      {
          "name": "New York",
          "abbreviation": "NY"
      },
      {
          "name": "North Carolina",
          "abbreviation": "NC"
      },
      {
          "name": "North Dakota",
          "abbreviation": "ND"
      },
      {
          "name": "Northern Mariana Islands",
          "abbreviation": "MP"
      },
      {
          "name": "Ohio",
          "abbreviation": "OH"
      },
      {
          "name": "Oklahoma",
          "abbreviation": "OK"
      },
      {
          "name": "Oregon",
          "abbreviation": "OR"
      },
      {
          "name": "Palau",
          "abbreviation": "PW"
      },
      {
          "name": "Pennsylvania",
          "abbreviation": "PA"
      },
      {
          "name": "Puerto Rico",
          "abbreviation": "PR"
      },
      {
          "name": "Rhode Island",
          "abbreviation": "RI"
      },
      {
          "name": "South Carolina",
          "abbreviation": "SC"
      },
      {
          "name": "South Dakota",
          "abbreviation": "SD"
      },
      {
          "name": "Tennessee",
          "abbreviation": "TN"
      },
      {
          "name": "Texas",
          "abbreviation": "TX"
      },
      {
          "name": "Utah",
          "abbreviation": "UT"
      },
      {
          "name": "Vermont",
          "abbreviation": "VT"
      },
      {
          "name": "Virgin Islands",
          "abbreviation": "VI"
      },
      {
          "name": "Virginia",
          "abbreviation": "VA"
      },
      {
          "name": "Washington",
          "abbreviation": "WA"
      },
      {
          "name": "West Virginia",
          "abbreviation": "WV"
      },
      {
          "name": "Wisconsin",
          "abbreviation": "WI"
      },
      {
          "name": "Wyoming",
          "abbreviation": "WY"
      }
  ];

  step: number = 1;

  registrationForm: FormGroup;

  stepControls: [
    [
      'FirstName'
    ]
  ]

  constructor(
    public fb: FormBuilder,
    public mockService: MockService
  ) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      step1: this.fb.group({
        FirstName: [null, [Validators.required]],
        LastName: [null, [Validators.required]],
        Email: [null, [Validators.required, Validators.email]],
        Phone: [null, Validators.required],
      }),
      step2: this.fb.group({
        Address1: [null, [Validators.required]],
        Address2: [null, []],
        City: [null, [Validators.required]],
        State: [null, [Validators.required]],
        Zip: [null, [Validators.required]],
      }),
      step3: this.fb.group({
        Employment: [null, [Validators.required]],
        Employer: [null, []]
      })
        
    })
  }

  validate() {
    if (this.step == 1) {
      this.registrationForm.get('step1').get('FirstName').markAsDirty();
      this.registrationForm.get('step1').get('LastName').markAsDirty();
      this.registrationForm.get('step1').get('Email').markAsDirty();
      this.registrationForm.get('step1').get('Phone').markAsDirty();
      if (this.registrationForm.get('step1').valid) {
        this.step = 2;
      }
    } else if (this.step == 2) {
      this.registrationForm.get('step2').get('Address1').markAsDirty();
      this.registrationForm.get('step2').get('Address2').markAsDirty();
      this.registrationForm.get('step2').get('City').markAsDirty();
      this.registrationForm.get('step2').get('State').markAsDirty();
      this.registrationForm.get('step2').get('Zip').markAsDirty();
      if (this.registrationForm.get('step2').valid) {
        this.step = 3;
      }
    } else if (this.step == 2) {
      this.registrationForm.get('step3').get('Employment').markAsDirty();
      this.registrationForm.get('step3').get('Employer').markAsDirty();
      if (this.registrationForm.get('step3').valid) {
        this.submitForm();
      }
    }
  }

  submitForm() {
    let data = this.registrationForm.getRawValue();
    this.mockService.postRegistration(data)
    .subscribe((data: any) => {
      this.step = 4;
    })
  }

}
