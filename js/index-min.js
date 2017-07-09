const intervalNames=["Unison","Minor 2nd","Major 2nd","Minor 3rd","Major 3rd","Perfect 4th","Diminished 5th","Perfect 5th","Minor 6th","Major 6th","Minor 7th","Major 7th","Octave","Minor 9th","Major 9th","Minor 10th","Major 10th","Perfect 11th","Dimisished 12th","Perfect 12th","Minor 13th","Major 13th","Minor 14th","Major 14th","Two Octaves"],chordNames=["Major","Minor","Augmented","Dimished","Sus2","Sus4","7","Maj7","m7","m7b5","Dim7","7(b5)","7(#5)","m(maj7)","Sus4(7)","6","m6","Maj9","7(b9)","9","7(#9)","m9"],chordInversionNames=["Major","Minor","Augmented","Dimished","Sus2","Sus4","7","Maj7","m7","m7b5","Dim7","7(b5)","7(#5)","m(maj7)","Sus4(7)","6","m6"],scaleNames=["Major Pentatonic","Minor Pentatonic","Ionian","Dorian","Phrygian","Lydian","Mixolydian","Aeolian","Locrian","Harmonic Minor","Melodic Minor","Lydian (#5)","Lydian(b7)","Mixolydian (b13)","Wholetone","Locrian (#2)","Diminished (1-1/2)","Diminished (1/2-1)","Altered","Phrygian (#6)","Dorian (#4)","Mixolydian (b9, b13)","Locrian (#6)","Ionian (#5)","Lydian (#2)","Altered (b7)"];var userExercises={"Compare Interval Sizes":[],"Identify Intervals":[],"Identify Chords":[],"Identify Chord Inversions":[],"Identify Scales":[],init:function(){this["Compare Interval Sizes"]=utils.store("Compare Interval Sizes"),this["Identify Intervals"]=utils.store("Identify Intervals"),this["Identify Chords"]=utils.store("Identify Chords"),this["Identify Chord Inversions"]=utils.store("Identify Chord Inversions"),this["Identify Scales"]=utils.store("Identify Scales"),handlers.setupDisciplineBtnListeners(),render.showView("exercise-selector")},addExercise:function(e,i,s,t,n){this[e].unshift({title:i,description:s,harmony:t,soundSequences:n}),utils.store(e,this[e]),render.displayExerciseList(e)},deleteExercise:function(e,i){this[e].splice(i,1),utils.store(e,this[e]),render.displayExerciseList(e)},editExercise:function(e,i,s,t,n,r){var c=this[e][i];c.title=s,c.description=t,c.harmony=n,c.soundSequences=r,utils.store(e,this[e]),render.displayExerciseList(e)},copyExercise:function(e,i){var s=this[e][i],t=utils.copyObject(s);t.title+=" - copy",this[e].splice(i,0,t),utils.store(e,this[e]),render.displayExerciseList(e)}},utils={copyObject:function(e){if(null===e||"object"!=typeof e)return e;var i=e.constructor();for(var s in e)e.hasOwnProperty(s)&&(i[s]=e[s]);return i},store:function(e,i){if(arguments.length>1)return localStorage.setItem(e,JSON.stringify(i));var s=localStorage.getItem(e);return s&&JSON.parse(s)||[]}},render={displayExerciseList:function(e){$("#exercise-list").empty(),0===userExercises[e].length?($("#no-exercises-in-discipline-text").text('There are no exercises in "'+e+'". Create one now!'),$("#no-exercises-in-discipline-text").show()):($("#no-exercises-in-discipline-text").hide(),userExercises[e].forEach(function(e,i){var s=document.createElement("li"),t=document.createElement("span"),n=document.createElement("div");s.className="exercise-item",s.id=i,t.className="exercise-title",n.className="delete-edit-buttons",t.textContent=e.title,s.appendChild(t),s.appendChild(n),n.appendChild(this.createButton('edit-exercise btn icon-left-big"')),n.appendChild(this.createButton("delete-exercise btn icon-trash-empty")),n.appendChild(this.createButton("copy-exercise btn icon-docs")),$("#exercise-list").append(s)},this),this.showView("exercise-selector"),handlers.setupExerciseItemListeners(e))},displayExerciseInfo:function(e,i,s){console.log(e,i,s),$(".btn-selected").removeClass("btn-selected"),0===i&&$("#exercise-list li:first").addClass("btn-selected"),$(s).addClass("btn-selected");var t="",n="";userExercises[e]?($(".exercise-info-title").text(t),$(".exercise-info-description").text(n)):(t=userExercises[e][i].title,n=userExercises[e][i].description,$(".exercise-info-title").text(t),$(".exercise-info-description").text(n))},showView:function(e){$(".view").hide(),$("#"+e).show()},createButton:function(e){var i=document.createElement("div");return i.className=e,i},createCheckBox:function(){var e=document.createElement("input");return e.type="checkbox",e.className="include-sound-sequence",e},clearExerciseEditorView:function(){$("#sound-sequence-list").empty(),$("#exercise-title-input").val(""),$("#exercise-description-input").val(""),$("#sound-sequences-in-exercise-label").text(""),$("#sound-sequences-in-exercise").text(""),$("#validation").text(""),$("#harmony-ascending").prop("checked",!0)},displaySoundSequenceList:function(e,i,s){this.clearExerciseEditorView();var t=[],n="";switch(e){case"Compare Interval Sizes":t=intervalNames,n="Intervals";break;case"Identify Intervals":t=intervalNames,n="Intervals";break;case"Identify Chords":t=chordNames,n="Chords";break;case"Identify Chord Inversions":t=chordInversionNames,n="Chords";break;case"Identify Scales":t=scaleNames,n="Scales";break}if($("#sound-sequences-in-exercise-label").text(n+" in this exercise:"),t.forEach(function(e,i){var s=document.createElement("li");s.className="sound-sequence-item",s.id=i,s.textContent=e,s.appendChild(this.createCheckBox()),document.getElementById("sound-sequence-list").appendChild(s)},this),s){var r=userExercises[e][i];switch(r.soundSequences.forEach(function(e){$("input[type=checkbox]").each(function(){$(this).closest(".sound-sequence-item").text()===e&&$(this).prop("checked",!0)})}),$("#exercise-title-input").val(r.title),$("#exercise-description-input").val(r.description),r.harmony){case"Ascending":$("#harmony-ascending").prop("checked",!0);break;case"Descending":$("#harmony-descending").prop("checked",!0);break;case"Harmonic":$("#harmony-harmonic").prop("checked",!0);break;case"Random":$("#harmony-random").prop("checked",!0)}handlers.setupCreateExerciseListeners(e,i,s)}else handlers.setupCreateExerciseListeners(e)},displaySoundSequenceNamesList:function(e){$("#sound-sequences-in-exercise").text(e)},displayEditExerciseMode:function(e,i){this.showView("exercise-creator"),this.displaySoundSequenceList(e,i,!0)}},handlers={setupDisciplineBtnListeners:function(){var e="Compare Interval Sizes";$("#compare-interval-sizes-btn").addClass("select-discipline-btn-active"),render.displayExerciseList(e),render.displayExerciseInfo(e,0),$("#compare-interval-sizes-btn").click(function(){e="Compare Interval Sizes",$(".select-discipline-btn").removeClass("select-discipline-btn-active"),$(this).addClass("select-discipline-btn-active"),render.displayExerciseList(e),render.displayExerciseInfo(e,0)}),$("#identify-intervals-btn").click(function(){e="Identify Intervals",$(".select-discipline-btn").removeClass("select-discipline-btn-active"),$(this).addClass("select-discipline-btn-active"),render.displayExerciseList(e),render.displayExerciseInfo(e,0)}),$("#identify-chords-btn").click(function(){e="Identify Chords",$(".select-discipline-btn").removeClass("select-discipline-btn-active"),$(this).addClass("select-discipline-btn-active"),render.displayExerciseList(e),render.displayExerciseInfo(e,0)}),$("#identify-chord-inversions-btn").click(function(){e="Identify Chord Inversions",$(".select-discipline-btn").removeClass("select-discipline-btn-active"),$(this).addClass("select-discipline-btn-active"),render.displayExerciseList(e),render.displayExerciseInfo(e,0)}),$("#identify-scales-btn").click(function(){e="Identify Scales",$(".select-discipline-btn").removeClass("select-discipline-btn-active"),$(this).addClass("select-discipline-btn-active"),render.displayExerciseList(e),render.displayExerciseInfo(e,0)}),$(".create-new-exercise").click(function(){render.showView("exercise-creator"),render.displaySoundSequenceList(e)})},setupExerciseItemListeners:function(e){$(".exercise-item").click(function(i){var s=i.target;if($(s).hasClass("delete-exercise")){var t=$(s).closest(".exercise-item").attr("id");userExercises.deleteExercise(e,parseInt(t))}if($(s).hasClass("copy-exercise")){var n=$(s).closest(".exercise-item").attr("id");userExercises.copyExercise(e,parseInt(n))}if($(s).hasClass("edit-exercise")){var r=$(s).closest(".exercise-item").attr("id");render.displayEditExerciseMode(e,parseInt(r))}if(s.className,!0){var c=$(s).closest(".exercise-item").attr("id");render.displayExerciseInfo(e,c,this)}})},setupCreateExerciseListeners:function(e,i,s){var t=[],n="";$("input[type=checkbox]").change(function(){var e=$(this).closest(".sound-sequence-item").text();if(this.checked)t.push(e),n=t.join(", "),render.displaySoundSequenceNamesList(n);else if(!1===this.checked){var i=t.indexOf(e);t.splice(i,1),n=t.join(", "),render.displaySoundSequenceNamesList(n)}}),$("#save-exercise").off(),$("#save-exercise").on("click",function(){var t=$("#exercise-title-input").val().trim(),n=$("#exercise-description-input").val().trim(),r=$("input[name=harmony]:checked").val(),c=[];$("input[type=checkbox]").each(function(){if(this.checked){var e=$(this).closest(".sound-sequence-item").text();c.push(e)}}),""===t&&(t="Untitled Exercise"),c.length<2?$("#validation").text("Select at least two chords / intervals / scales"):s?userExercises.editExercise(e,i,t,n,r,c):userExercises.addExercise(e,t,n,r,c)})}};userExercises.init();