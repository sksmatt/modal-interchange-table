window.onload = function() {
    const tb = chart.getElementsByTagName('tbody')[0],
    notes = ['C','C#/Db','D','D#/Eb','E','F','F#/Gb','G','G#/Ab','A','A#/Bb','B'],
    modes = [
    ["Ionian",   
    [0,2,4,5,7,9,11], 
    ['Maj7','m7','m7', 'Maj7','7','m7','m7b5']
    ],
    ["Dorian",   
    [0,2,3,5,7,8,10], 
    ['m7','m7','Maj7','7','m7','m7b5','Maj7']
    ],
    ["Phrygian", 
    [0,1,4,5,6,8,10], 
    ['m7','Maj7','7','m7','m7b5','Maj7','m7']
    ],
    ["Lydian", 
    [0,2,4,6,7,9,11], 
    ['Maj7','7','m7','m7b5','Maj7','m7','m7']
    ],
    ["Mixolydian", 
    [0,2,4,5,7,9,10], 
    ['7','m7','m7b5','Maj7','m7','m7','Maj7']
    ],
    ["Aeolian", 
    [0,2,3,5,6,9,10], 
    ['m7','m7b5','Maj7','m7','m7','Maj7','7']
    ],
    ["Locrian", 
    [0,1,3,5,6,8,10], 
    ['m7b5','Maj7','m7','m7','Maj7','7','m7']
    ],
    ["Mel. Minor", 
    [0,2,3,5,7,9,11], 
    ['mMaj7','m7','Maj7#5','7','7','m7b5','m7b5']
    ],
    ["Harm. Minor", 
    [0,2,3,5,7,8,11], 
    ['mMaj7','m7b5','Maj7#5','m7','7b9','Maj7','m7b5']
    ],
    ];

    notes.forEach(function (note) {
        var option = document.createElement("option");
        option.text = option.value = note;
        key.appendChild(option);
    });

    function getNote(index) {
        index = index > 11 ? index - 12 : index;
        return notes[index];
    }

    function setModes(key) {
        tb.innerHTML = "";
        modes.forEach(function(mode) { 
            var row = tb.insertRow(tb.rows.length);
            var cell = row.insertCell(0);
            cell.appendChild(document.createTextNode(notes[key] + ' ' + mode[0]));
            mode[1].forEach(function(grade, index) {
                var cell = row.insertCell(index + 1);
                var chord = getNote(key + grade) + mode[2][index];
                cell.appendChild(document.createTextNode(chord));
            });
        });
    }

    key.addEventListener('change', function() {
        setModes(notes.indexOf(this.value));
    });

    setModes(0);
}