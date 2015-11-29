BloodType = {

  AB_POS : "AB_POS",
  AB_NEG : "AB_NEG",
  A_POS  : "A_POS",
  A_NEG  : "A_NEG",
  B_POS  : "B_POS",
  B_NEG  : "B_NEG",
  O_POS  : "O_POS",
  O_NEG  : "O_NEG"

};

BloodTransfusionRules = {

  /**
   * Set the simulation speed.
   * @type {Number} : Valid values between 1 and 200
   */
  simulation_speed : 200,

  /**
   * returns BloodType, or false to give no BloodType
   *
   * @name receive_patient
   * @param {Bank} blood_inventory
   * @param {Patient} patient
   * @returns {BloodType or false}
   *
   * Patient properties {
   *   gender : String, (MALE,FEMALE)
   *   blood_type : String (BloodType)
   * }
   *
   * Bank properties {
   *   AB_POS : Integer,
   *   AB_NEG : Integer,
   *   A_POS  : Integer,
   *   A_NEG  : Integer,
   *   B_POS  : Integer,
   *   B_NEG  : Integer,
   *   O_POS  : Integer,
   *   O_NEG  : Integer
   * }
   *
   */

  receive_patient : function (blood_inventory, patient) {
    // var aPOSReceive = [BloodType.A_POS, BloodType.A_NEG, BloodType.O_POS, BloodType.O_NEG];
    // var aPOSRand = aPOSReceive[Math.floor(Math.random() * aPOSReceive.length)];

    // var aNEGReceive = [BloodType.A_NEG, BloodType.O_NEG];
    // var aNEGRand = aNEGReceive[Math.floor(Math.random() * aNEGReceive.length)];

    // var bPOSReceive = [BloodType.B_POS, BloodType.B_NEG, BloodType.O_POS, BloodType.O_NEG];
    // var bPOSRand = bPOSReceive[Math.floor(Math.random() * bPOSReceive.length)];

    // var bNEGReceive = [BloodType.B_NEG, BloodType.O_NEG];
    // var bNEGRand = bNEGReceive[Math.floor(Math.random() * bNEGReceive.length)];

    // var abPOSReceive = [BloodType.A_POS, BloodType.A_NEG, BloodType.B_POS, BloodType.B_NEG, BloodType.AB_POS, BloodType.AB_NEG, BloodType.O_POS, BloodType.O_NEG];
    // var abPOSRand = abPOSReceive[Math.floor(Math.random() * abPOSReceive.length)];

    // var abNEGReceive = [BloodType.AB_NEG, BloodType.A_NEG, BloodType.B_NEG, BloodType.O_NEG];
    // var abNEGRand = abNEGReceive[Math.floor(Math.random() * abNEGReceive.length)];

    // var oPOSReceive = [BloodType.O_POS, BloodType.O_NEG];
    // var oPOSRand = oPOSReceive[Math.floor(Math.random() * oPOSReceive.length)];

    if(patient.blood_type === 'A_POS') {
      if(blood_inventory.A_POS >= 1) {
        return BloodType.A_POS;
      }
      if(blood_inventory.A_NEG >= 1) {
        return BloodType.A_NEG;
      }
      if(blood_inventory.O_POS >= 1) {
        return BloodType.O_POS;
      }
      if(blood_inventory.O_NEG >= 1) {
        return BloodType.O_NEG;
      }
      return false;
      // return aPOSRand;
    }

    if(patient.blood_type === 'A_NEG') {
      if(blood_inventory.A_NEG >= 1) {
        return BloodType.A_NEG;
      }
      if(blood_inventory.O_NEG >= 1) {
        return BloodType.O_NEG;
      }
      return false;
      // return aNEGRand;
    }

    if(patient.blood_type === 'B_POS') {
      if(blood_inventory.B_POS >= 1) {
        return BloodType.B_POS;
      }
      if(blood_inventory.B_NEG >= 1) {
        return BloodType.B_NEG;
      }
      if(blood_inventory.O_POS >= 1) {
        return BloodType.O_POS;
      }
      if(blood_inventory.O_NEG >= 1) {
        return BloodType.O_NEG;
      }
      return false;
      // return bPOSRand;
    }

    if(patient.blood_type === 'B_NEG') {
      if(blood_inventory.B_NEG >= 1) {
        return BloodType.B_NEG;
      }
      if(blood_inventory.O_NEG >= 1) {
        return BloodType.O_NEG;
      }
      return false;
      // return bNEGRand;
    }

    // if(patient.blood_type === 'AB_POS') {
    //   if(blood_inventory.A_POS >= 1) {
    //     return BloodType.A_POS;
    //   }
    //   if(blood_inventory.A_NEG >= 1) {
    //     return BloodType.A_NEG;
    //   }
    //   if(blood_inventory.B_POS >= 1) {
    //     return BloodType.B_POS;
    //   }
    //   if(blood_inventory.B_NEG >= 1) {
    //     return BloodType.B_NEG;
    //   }
    //   if(blood_inventory.AB_POS >= 1) {
    //     return BloodType.AB_POS;
    //   }
    //   if(blood_inventory.AB_NEG >= 1) {
    //     return BloodType.AB_NEG;
    //   }
    //   if(blood_inventory.O_POS >= 1) {
    //     return BloodType.O_POS;
    //   }
    //   if(blood_inventory.O_NEG >= 1) {
    //     return BloodType.O_NEG;
    //   }
    //   return false;
    //   // return abPOSRand;
    // }

    if(patient.blood_type === BloodType.AB_POS) {
      var abUse = [BloodType.A_POS, BloodType.A_NEG, BloodType.B_POS, BloodType.B_NEG, BloodType.AB_POS, BloodType.AB_NEG, BloodType.O_POS, BloodType.O_NEG];
      for (var i = 0; i <= abUse.length; i++) {
        var bloodType = abUse[i];

        if(blood_inventory[bloodType] > 0) {
          return BloodType[bloodType];
        }
      }
    }

    if(patient.blood_type === 'AB_NEG') {
      if(blood_inventory.AB_NEG >= 1) {
        return BloodType.AB_NEG;
      }
      if(blood_inventory.A_NEG >= 1) {
        return BloodType.A_NEG;
      }
      if(blood_inventory.B_NEG >= 1) {
        return BloodType.B_NEG;
      }
      if(blood_inventory.O_NEG >= 1) {
        return BloodType.O_NEG;
      }
      return false;
      // return abNEGRand;
    }

    if(patient.blood_type === 'O_POS') {
      if(blood_inventory.O_POS >= 1) {
        return BloodType.O_POS;
      }
      if(blood_inventory.O_NEG >= 1) {
        return BloodType.O_NEG;
      }
      return false;
      // return oPOSRand;
    }

    if(patient.blood_type === 'O_NEG') {
      return BloodType.O_NEG;
    }
    // return patient.blood_type;

  }

};

