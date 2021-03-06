const intervalNames = ['Unison', 'Minor 2nd', 'Major 2nd', 'Minor 3rd', 'Major 3rd', 'Perfect 4th', 'Diminished 5th', 'Perfect 5th', 'Minor 6th', 'Major 6th', 'Minor 7th', 'Major 7th', 'Octave', 'Minor 9th', 'Major 9th', 'Minor 10th', 'Major 10th', 'Perfect 11th', 'Dimisished 12th', 'Perfect 12th', 'Minor 13th', 'Major 13th', 'Minor 14th', 'Major 14th', 'Two Octaves'];
const chordNames = ['Major', 'Minor', 'Augmented', 'Dimished', 'Sus2', 'Sus4', '7', 'Maj7', 'm7', 'm7b5', 'Dim7', '7(b5)', '7(#5)', 'm(maj7)', 'Sus4(7)', '6', 'm6', 'Maj9', '7(b9)', '9', '7(#9)', 'm9'];
const chordInversionNames = ['Major', 'Minor', 'Augmented', 'Dimished', 'Sus2', 'Sus4', '7', 'Maj7', 'm7', 'm7b5', 'Dim7', '7(b5)', '7(#5)', 'm(maj7)', 'Sus4(7)', '6', 'm6'];
const scaleNames = ['Major Pentatonic', 'Minor Pentatonic', 'Ionian', 'Dorian', 'Phrygian', 'Lydian', 'Mixolydian', 'Aeolian', 'Locrian', 'Harmonic Minor', 'Melodic Minor', 'Lydian (#5)', 'Lydian(b7)', 'Mixolydian (b13)', 'Wholetone', 'Locrian (#2)', 'Diminished (1-1/2)', 'Diminished (1/2-1)', 'Altered', 'Phrygian (#6)', 'Dorian (#4)', 'Mixolydian (b9, b13)', 'Locrian (#6)', 'Ionian (#5)', 'Lydian (#2)', 'Altered (b7)'];


var userExercises = {
  "Compare Interval Sizes": [],
  "Identify Intervals": [],
  "Identify Chords": [],
  "Identify Chord Inversions": [],
  "Identify Scales": [],
  init: function() {
    // Populate level arrays from localStorage
    this["Compare Interval Sizes"] = utils.store("Compare Interval Sizes");
    this["Identify Intervals"] = utils.store("Identify Intervals");
    this["Identify Chords"] = utils.store("Identify Chords");
    this["Identify Chord Inversions"] = utils.store("Identify Chord Inversions");
    this["Identify Scales"] = utils.store("Identify Scales");

    handlers.setupDisciplineBtnListeners();
    render.showView('exercise-selector');
  },
  addExercise: function(discipline, title, description, harmony, soundSequences) {
    this[discipline].unshift({
      title: title,
      description: description,
      harmony: harmony,
      soundSequences: soundSequences
    });
    utils.store(discipline, this[discipline]);
    render.displayExerciseList(discipline);
  },
  deleteExercise: function(discipline, position) {
    this[discipline].splice(position, 1);
    utils.store(discipline, this[discipline]);
    render.displayExerciseList(discipline);
  },
  editExercise: function(discipline, position ,title, description, harmony, soundSequences) {
    var currentExerciseBeingEdited = this[discipline][position];
    currentExerciseBeingEdited.title = title;
    currentExerciseBeingEdited.description = description;
    currentExerciseBeingEdited.harmony = harmony;
    currentExerciseBeingEdited.soundSequences = soundSequences;
    utils.store(discipline, this[discipline]);
    render.displayExerciseList(discipline);
  },
  copyExercise: function(discipline, position) {
    var originalExercise = this[discipline][position];
    //console.log(originalExercise);
    var exerciseCopy = utils.copyObject(originalExercise);
    exerciseCopy.title += " - copy";
    // Place the copy imediately before the original level
    this[discipline].splice(position, 0, exerciseCopy);
    utils.store(discipline, this[discipline]);
    render.displayExerciseList(discipline);
  }
};

var utils = {
  copyObject: function(obj) {
    // return obj if it's not an object
    if (null === obj || "object" !== typeof obj) {return obj;}
    var copy = obj.constructor();
    // add each attribute of obj to the new copy
    for (var attr in obj) {
      if (obj.hasOwnProperty(attr)) {copy[attr] = obj[attr];}
    }
    return copy;
  },
  store: function(storageKey, data) {
    if (arguments.length > 1) {
      return localStorage.setItem(storageKey, JSON.stringify(data));
    } else {
      var store = localStorage.getItem(storageKey);
      return (store && JSON.parse(store)) || [];
    }
  },
  getSoundsequenceArray: function(disciplineName) {
    var soundSequenceInfo = [];

    switch (disciplineName) {
      case 'Compare Interval Sizes':
        soundSequenceInfo.push(intervalNames);
        soundSequenceInfo.push('Intervals');
        return soundSequenceInfo;
        break;
      case 'Identify Intervals':
        soundSequenceInfo.push(intervalNames);
        soundSequenceInfo.push('Intervals');
        return soundSequenceInfo;
        break;
      case 'Identify Chords':
        soundSequenceInfo.push(chordNames);
        soundSequenceInfo.push('Chords');
        return soundSequenceInfo;
        break;
      case 'Identify Chord Inversions':
        soundSequenceInfo.push(chordInversionNames);
        soundSequenceInfo.push('Chords');
        return soundSequenceInfo;
        break;
      case 'Identify Scales':
        soundSequenceInfo.push(scaleNames);
        soundSequenceInfo.push('Scales');
        return soundSequenceInfo;
        break;
    }
  },
  getOrderedSoundSequenceArray: function(originalOrder, arrayToSort) {
    var itemsInOrder = [];

    for (var i = 0; i < originalOrder.length; i++) {
      if (arrayToSort.indexOf(originalOrder[i]) > -1) {
        itemsInOrder.push(originalOrder[i]);
      }
    }
    return itemsInOrder;
  }
};

var render = {
  displayExerciseList: function(discipline) {
    // Hide the back  arrow from the select exercise screen and set title
    $('.back-arrow').hide();
    $('.navigation-title').text('Select exercise');

    // Setup listener for back button TEST TEST TEST SHOULD BE IN THE HANDLERS OBJECT
    $('.back-arrow').on('click', function() {
      render.showView('exercise-selector');
      $('.back-arrow').hide();
      $('.navigation-title').text('Select exercise');
    });

    // Empty all exercises from list
    $('#exercise-list').empty();

    if (userExercises[discipline].length === 0) {
      $('#no-exercises-in-discipline-text').text('There are no exercises in "' + discipline + '". Create one now!');
      $('#no-exercises-in-discipline-text').show();
    } else {
      $('#no-exercises-in-discipline-text').hide();

      // Create a list item with title and buttons for every exercise in discipline
      userExercises[discipline].forEach(function(exercise, position) {
        var exerciseItem = document.createElement("li");
        var exerciseTitle = document.createElement("span");
        var deleteEditButtons = document.createElement("div");

        exerciseItem.className = "exercise-item";
        exerciseItem.id = position; // Assign id so we can later use it to delete matching element in exercise array
        exerciseTitle.className = "exercise-title";
        deleteEditButtons.className = "delete-edit-buttons";

        exerciseTitle.textContent = exercise.title;

        exerciseItem.appendChild(exerciseTitle);
        exerciseItem.appendChild(deleteEditButtons);
        deleteEditButtons.appendChild(this.createButton('edit-exercise btn icon-edit'));
        deleteEditButtons.appendChild(this.createButton('delete-exercise btn icon-trash-empty'));
        deleteEditButtons.appendChild(this.createButton('copy-exercise btn icon-docs'));
        $('#exercise-list').append(exerciseItem);
      }, this);
      this.showView('exercise-selector');
      handlers.setupExerciseItemListeners(discipline);
    }
  },
  displayExerciseInfo: function(discipline, exercise, exerciseElementClicked) {

    $('.btn-selected').removeClass('btn-selected');
    // if the first element in the list is selected either on click or predefined, then add the selected class to the item
    if (exercise === 0) {
      $('#exercise-list li:first').addClass('btn-selected');
    }
      $(exerciseElementClicked).addClass('btn-selected');

    var exerciseInfoTitle = '';
    var exerciseInfoDescription = '';
    // Check if userExercises[discipline] is undefined (returns true) and set exercise info accordingly

    // check if the first item in an exercise is undefined and set exercise info accordingly
    if (typeof userExercises[discipline][0] === 'undefined') {
      $('.exercise-info-title').text(exerciseInfoTitle);
      $('.exercise-info-description').text(exerciseInfoDescription);
    } else {
      // if the exercise
      exerciseInfoTitle = userExercises[discipline][exercise].title;
      exerciseInfoDescription = userExercises[discipline][exercise].description;
      $('.exercise-info-title').text(exerciseInfoTitle);
      $('.exercise-info-description').text(exerciseInfoDescription);
    }

  },
  showView: function(viewName) {
    $('.view').hide();
    $('#' + viewName).show();
  },
  createButton: function(buttonClassName) {
    var newButton = document.createElement('div');
    newButton.className = buttonClassName;
    return newButton;
  },
  createCheckBox: function() {
    var checkBox = document.createElement('input');
    //var label = document.createElement('label');
    checkBox.type = 'checkbox';
    checkBox.className = 'include-sound-sequence';
    return checkBox;
  },
  clearExerciseEditorView: function () {
      // Empty form fields and sound sequence list
    $('#sound-sequence-list').empty();
    $('#exercise-title-input').val('');
    $('#exercise-description-input').val('');
    $('#sound-sequences-in-exercise-label').text('');
    $('#sound-sequences-in-exercise').text('');
    $('#validation').text('');
    $('#harmony-ascending').prop('checked', true);
  },
  displaySoundSequenceList: function(discipline, position, editMode) {
    this.clearExerciseEditorView();
    // Show the back button on the create exercise screen and update title
    $('.back-arrow').show();
    $('.navigation-title').text('Create "' + discipline + '" exercise');

    // check which discipline is selected and set soundSequenceArray to the corresponding array
    var soundSequenceInfo = utils.getSoundsequenceArray(discipline);


      $('#sound-sequences-in-exercise-label').text(soundSequenceInfo[1] + ' in this exercise:');

    // loop over each soundsequence name in the array and create the list
      soundSequenceInfo[0].forEach(function(soundSequenceName, position) {
      var soundSequenceItem = document.createElement('li');
      var soundSequenceLabel = document.createElement('label');
      var checkBoxDiv = document.createElement('div');
      soundSequenceItem.className = 'sound-sequence-item';
      soundSequenceLabel.className = 'checkbox';
      checkBoxDiv.className = 'box';
      soundSequenceItem.id = position;
      soundSequenceItem.textContent = soundSequenceName;
      soundSequenceItem.appendChild(soundSequenceLabel);
      soundSequenceLabel.appendChild(this.createCheckBox());
      soundSequenceLabel.appendChild(checkBoxDiv);
      var soundSequenceList = document.getElementById('sound-sequence-list');
      soundSequenceList.appendChild(soundSequenceItem);
    }, this);

    // if in edit mode, check the boxes for selected soundsequences in exercises and add selected harmony, title and description to the form
    if (editMode) {
      var currentExerciseBeingEdited = userExercises[discipline][position];
      // check value of soundsequence in exercise
      currentExerciseBeingEdited.soundSequences.forEach(function(item) {
        // loop over soundsequence list and check box if soundsequence name is equal to this levels soundsequences
        $('input[type=checkbox]').each(function() {
           if ($(this).closest('.sound-sequence-item').text() === item) {
             $(this).prop('checked', true);
           }
         });
      });

      $('#exercise-title-input').val(currentExerciseBeingEdited.title);
      $('#exercise-description-input').val(currentExerciseBeingEdited.description);

      // Determine the currentExerciseBeingEditied harmony and set checked property on the corresponding radio button
      switch (currentExerciseBeingEdited.harmony) {
        case 'Ascending':
          $('#harmony-ascending').prop('checked', true);
          break;
        case 'Descending':
          $('#harmony-descending').prop('checked', true);
          break;
        case 'Harmonic':
          $('#harmony-harmonic').prop('checked', true);
          break;
        case 'Random':
          $('#harmony-random').prop('checked', true);
       }
      handlers.setupCreateExerciseListeners(discipline, position, editMode); // editMode = true
    } else {
      handlers.setupCreateExerciseListeners(discipline);
    }

  },
  displaySoundSequenceNamesList: function(soundSequencesInExercise) {
    $('#sound-sequences-in-exercise').text(soundSequencesInExercise);
  },
  displayEditExerciseMode: function(discipline, position) {
    this.showView('exercise-creator');
    // pass in true as the last argument to render create exercise in edit mode
    this.displaySoundSequenceList(discipline, position, true);
  }

};

var handlers = {
  setupDisciplineBtnListeners: function() {

    var currentDisciplineSelected = 'Compare Interval Sizes';
    // sets Compare Interval Sizes to active and display the exerciselist
    $("#compare-interval-sizes-btn").addClass('select-discipline-btn-active');
    render.displayExerciseList(currentDisciplineSelected);
    // Select the first exercise item in the list and show its title and description
    render.displayExerciseInfo(currentDisciplineSelected, 0);

    $("#compare-interval-sizes-btn").click(function() {
      currentDisciplineSelected = 'Compare Interval Sizes';
      $('.select-discipline-btn').removeClass('select-discipline-btn-active');
      $(this).addClass('select-discipline-btn-active');
      render.displayExerciseList(currentDisciplineSelected);
      render.displayExerciseInfo(currentDisciplineSelected, 0);
    });
    $("#identify-intervals-btn").click(function() {
      currentDisciplineSelected = 'Identify Intervals';
      $('.select-discipline-btn').removeClass('select-discipline-btn-active');
      $(this).addClass('select-discipline-btn-active');
      render.displayExerciseList(currentDisciplineSelected);
      render.displayExerciseInfo(currentDisciplineSelected, 0);
    });
    $("#identify-chords-btn").click(function() {
      currentDisciplineSelected = 'Identify Chords';
      $('.select-discipline-btn').removeClass('select-discipline-btn-active');
      $(this).addClass('select-discipline-btn-active');
      render.displayExerciseList(currentDisciplineSelected);
      render.displayExerciseInfo(currentDisciplineSelected, 0);
    });
    $("#identify-chord-inversions-btn").click(function() {
      currentDisciplineSelected = 'Identify Chord Inversions';
      $('.select-discipline-btn').removeClass('select-discipline-btn-active');
      $(this).addClass('select-discipline-btn-active');
      render.displayExerciseList(currentDisciplineSelected);
      render.displayExerciseInfo(currentDisciplineSelected, 0);
    });
    $("#identify-scales-btn").click(function() {
      currentDisciplineSelected = 'Identify Scales';
      $('.select-discipline-btn').removeClass('select-discipline-btn-active');
      $(this).addClass('select-discipline-btn-active');
      render.displayExerciseList(currentDisciplineSelected);
      render.displayExerciseInfo(currentDisciplineSelected, 0);
    });
    // Create new exercise listener
    $('.create-new-exercise').click(function() {
      render.showView('exercise-creator');
      render.displaySoundSequenceList(currentDisciplineSelected);
    });

  },
  setupExerciseItemListeners: function(discipline) {
    $('.exercise-item').click(function(event) {
      var elementClicked = event.target;
      if ($(elementClicked).hasClass('delete-exercise')) {
        var exerciseToDeleteId = ($(elementClicked).closest('.exercise-item').attr('id'));
        userExercises.deleteExercise(discipline, parseInt(exerciseToDeleteId));
      }
      if ($(elementClicked).hasClass('copy-exercise')) {
        var exerciseToCopyId = ($(elementClicked).closest('.exercise-item').attr('id'));
        userExercises.copyExercise(discipline, parseInt(exerciseToCopyId));
      }
      if ($(elementClicked).hasClass('edit-exercise')) {
        // Go to the create screen and populate soundsequencelist with soundsequences in the exercise
        // populate the form with existing data from exercise
        // save and overwrite the current exercise
        var exerciseToEditId = ($(elementClicked).closest('.exercise-item').attr('id'));
        //render.showView('exercise-creator');
        render.displayEditExerciseMode(discipline, parseInt(exerciseToEditId));

      }

      if (elementClicked.className !== 'delete-exercise' || 'edit-exercise' || 'copy-exercise') {
        var exerciseId = ($(elementClicked).closest('.exercise-item').attr('id'));
        render.displayExerciseInfo(discipline, exerciseId, this);
      }
    });
  },
  setupCreateExerciseListeners: function(discipline, position, editMode){
  console.log(discipline, position, editMode);

    // Set variable to contain the correct array of sound sequences
    var originalSoundSequenceList = utils.getSoundsequenceArray(discipline);

    // Set up event listeners for checkbox change
    var currentlySelectedSoundSequencesArray = [];
    var currentlySelectedSoundSequencesString = '';
    $('input[type=checkbox]').change(function() {
      var soundSequenceItem = $(this).closest('.sound-sequence-item').text();
      if (this.checked) {
        currentlySelectedSoundSequencesArray.push(soundSequenceItem);

        // get the right order here...
        // if discipline is intervals, order array using the intervalNames array
        // if discipline is identify chords, order array using the chordNames array
        // etc etc... This should happen outside the conditional statement, so we already know which array to sort from..

        var sortedCurrentlySelectedSoundSequenceArray = utils.getOrderedSoundSequenceArray(originalSoundSequenceList[0], currentlySelectedSoundSequencesArray);
        currentlySelectedSoundSequencesString = sortedCurrentlySelectedSoundSequenceArray.join(', ');

        render.displaySoundSequenceNamesList(currentlySelectedSoundSequencesString);

      } else if (this.checked === false) {
        var indexToRemove = currentlySelectedSoundSequencesArray.indexOf(soundSequenceItem);
        currentlySelectedSoundSequencesArray.splice(indexToRemove, 1);

        var sortedCurrentlySelectedSoundSequenceArray = utils.getOrderedSoundSequenceArray(originalSoundSequenceList[0], currentlySelectedSoundSequencesArray);

        sortedCurrentlySelectedSoundSequenceArray = currentlySelectedSoundSequencesArray.join(', ');
        render.displaySoundSequenceNamesList(sortedCurrentlySelectedSoundSequenceArray);
      }
      });

    $('#save-exercise').off();
    $('#save-exercise').on('click', function() {
      var exerciseTitle = $('#exercise-title-input').val().trim();
      var exerciseDescription = $('#exercise-description-input').val().trim();
      var harmony = $('input[name=harmony]:checked').val();
      var soundSequenceArray = [];

      $('input[type=checkbox]').each(function() {
        if (this.checked) {
          var soundSequenceName = $(this).closest('.sound-sequence-item').text();
          soundSequenceArray.push(soundSequenceName);
        }
      });

      if (exerciseTitle === '') {
        exerciseTitle = 'Untitled Exercise';
      }

      if (soundSequenceArray.length < 2) {
        $('#validation').text('Select at least two chords / intervals / scales'); // should happen in the render object and take name of discipline into account.
      } else if (editMode) {
        userExercises.editExercise(discipline, position, exerciseTitle, exerciseDescription, harmony, soundSequenceArray);             }
      else {
        userExercises.addExercise(discipline, exerciseTitle, exerciseDescription, harmony, soundSequenceArray);
      }
    });
  }
};

userExercises.init();
