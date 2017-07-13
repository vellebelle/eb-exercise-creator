const soundSequences = {
  chords: {
    'Major': [0, 3, 5],
    'Minor': [1, 'b3' 5],
    'Sus2': [1, 2, 5],
    'Sus4': [1, 4, 5],
    'Aug': [1, '3' '#5'],
    'Dim': [1, 'b3' 'b5']
  },
  intervals: {
    'Unison':           [0, 0],
    'Minor 2nd':        [0, 1],
    'Major 2nd':        [0, 2],
    'Minor 3rd':        [0, 3],
    'Major 3rd':        [0, 4],
    'Perfect 4th':      [0, 5],
    'Diminished 5th':   [0, 6],
    'Perfect 5h':       [0, 7],
    'Minor 6th':        [0, 8],
    'Major 6th':        [0, 9],
    'Minor 7th':        [0, 10],
    'Major 7th':        [0, 11],
    'Octave':           [0,12],
    'Minor 9th':        [0, 13],
    'Major 9th':        [0, 14],
    'Minor 10th':       [0, 15],
    'Major 10th':       [0, 16],
    'Perfect 11th':     [0, 17],
    'Diminished 12th':  [0, 18],
    'Perfect 12th':     [0, 19],
    'Minor 13th':       [0, 20],
    'Major 13th':       [0, 21],
    'Minor 14th':       [0, 22],
    'Major 14th':       [0, 23],
    'Two Octaves':      [0, 24]
  }
};



	<SEQUENCEINFO type="INT">	<TAG>MIN_10</TAG>			<TONECOUNT>2</TONECOUNT>	<TONES>0,15</TONES>		</SEQUENCEINFO>
	<SEQUENCEINFO type="INT">	<TAG>MAJ_10</TAG>			<TONECOUNT>2</TONECOUNT>	<TONES>0,16</TONES>		</SEQUENCEINFO>
	<SEQUENCEINFO type="INT">	<TAG>PERF_11</TAG>			<TONECOUNT>2</TONECOUNT>	<TONES>0,17</TONES>		</SEQUENCEINFO>
	<SEQUENCEINFO type="INT">	<TAG>DIM_12</TAG>			<TONECOUNT>2</TONECOUNT>	<TONES>0,18</TONES>		</SEQUENCEINFO>
	<SEQUENCEINFO type="INT">	<TAG>PERF_12</TAG>			<TONECOUNT>2</TONECOUNT>	<TONES>0,19</TONES>		</SEQUENCEINFO>
	<SEQUENCEINFO type="INT">	<TAG>MIN_13</TAG>			<TONECOUNT>2</TONECOUNT>	<TONES>0,20</TONES>		</SEQUENCEINFO>
	<SEQUENCEINFO type="INT">	<TAG>MAJ_13</TAG>			<TONECOUNT>2</TONECOUNT>	<TONES>0,21</TONES>		</SEQUENCEINFO>
	<SEQUENCEINFO type="INT">	<TAG>MIN_14</TAG>			<TONECOUNT>2</TONECOUNT>	<TONES>0,22</TONES>		</SEQUENCEINFO>
	<SEQUENCEINFO type="INT">	<TAG>MAJ_14</TAG>			<TONECOUNT>2</TONECOUNT>	<TONES>0,23</TONES>		</SEQUENCEINFO>
	<SEQUENCEINFO type="INT">	<TAG>2OCT</TAG>				<TONECOUNT>2</TONECOUNT>	<TONES>0,24</TONES>		</SEQUENCEINFO>

	<!-- SCALE DATA -->
	<SEQUENCEINFO type="SCA">	<TAG>MAJ_PENT</TAG>			<TONECOUNT>5</TONECOUNT>	<TONES>2,2,3,2,3</TONES>			</SEQUENCEINFO>
	<SEQUENCEINFO type="SCA">	<TAG>MIN_PENT</TAG>			<TONECOUNT>5</TONECOUNT>	<TONES>3,2,2,3,2</TONES>			</SEQUENCEINFO>
	<SEQUENCEINFO type="SCA">	<TAG>ION</TAG>				<TONECOUNT>7</TONECOUNT>	<TONES>2,2,1,2,2,2,1</TONES>		</SEQUENCEINFO>
	<SEQUENCEINFO type="SCA">	<TAG>DOR</TAG>				<TONECOUNT>7</TONECOUNT>	<TONES>2,1,2,2,2,1,2</TONES>		</SEQUENCEINFO>
	<SEQUENCEINFO type="SCA">	<TAG>PHRY</TAG>				<TONECOUNT>7</TONECOUNT>	<TONES>1,2,2,2,1,2,2</TONES>		</SEQUENCEINFO>
	<SEQUENCEINFO type="SCA">	<TAG>LYD</TAG>				<TONECOUNT>7</TONECOUNT>	<TONES>2,2,2,1,2,2,1</TONES>		</SEQUENCEINFO>
	<SEQUENCEINFO type="SCA">	<TAG>MIX</TAG>				<TONECOUNT>7</TONECOUNT>	<TONES>2,2,1,2,2,1,2</TONES>		</SEQUENCEINFO>
	<SEQUENCEINFO type="SCA">	<TAG>AEOL</TAG>				<TONECOUNT>7</TONECOUNT>	<TONES>2,1,2,2,1,2,2</TONES>		</SEQUENCEINFO>
	<SEQUENCEINFO type="SCA">	<TAG>LOCR</TAG>	            <TONECOUNT>7</TONECOUNT>	<TONES>1,2,2,1,2,2,2</TONES>		</SEQUENCEINFO>
	<SEQUENCEINFO type="SCA">	<TAG>HAR_MIN</TAG>	        <TONECOUNT>7</TONECOUNT>	<TONES>2,1,2,2,1,3,1</TONES>		</SEQUENCEINFO>
	<SEQUENCEINFO type="SCA">	<TAG>MEL_MIN</TAG>	        <TONECOUNT>7</TONECOUNT>	<TONES>2,1,2,2,2,2,1</TONES>		</SEQUENCEINFO>
	<SEQUENCEINFO type="SCA">	<TAG>LYD_X5</TAG>	       	<TONECOUNT>7</TONECOUNT>	<TONES>2,2,2,2,1,2,1</TONES>		</SEQUENCEINFO>
	<SEQUENCEINFO type="SCA">	<TAG>LYD_B7</TAG>	       	<TONECOUNT>7</TONECOUNT>	<TONES>2,2,2,1,2,1,2</TONES>		</SEQUENCEINFO>
	<SEQUENCEINFO type="SCA">	<TAG>MIX_B13</TAG>   		<TONECOUNT>7</TONECOUNT>	<TONES>2,2,1,2,1,2,2</TONES>		</SEQUENCEINFO>
	<SEQUENCEINFO type="SCA">	<TAG>WHOLE</TAG>	        <TONECOUNT>6</TONECOUNT>	<TONES>2,2,2,2,2,2</TONES>			</SEQUENCEINFO>
	<SEQUENCEINFO type="SCA">	<TAG>LOCR_X2</TAG>	       	<TONECOUNT>7</TONECOUNT>	<TONES>2,1,2,1,2,2,2</TONES>		</SEQUENCEINFO>
	<SEQUENCEINFO type="SCA">	<TAG>DIM_WH</TAG>	   		<TONECOUNT>8</TONECOUNT>	<TONES>2,1,2,1,2,1,2,1</TONES>		</SEQUENCEINFO>
	<SEQUENCEINFO type="SCA">	<TAG>DIM_HW</TAG>	    	<TONECOUNT>8</TONECOUNT>	<TONES>1,2,1,2,1,2,1,2</TONES>		</SEQUENCEINFO>
	<SEQUENCEINFO type="SCA">	<TAG>ALT</TAG>	           	<TONECOUNT>7</TONECOUNT>	<TONES>1,2,1,2,2,2,2</TONES>		</SEQUENCEINFO>
	<SEQUENCEINFO type="SCA">	<TAG>PHRY_X6</TAG>	        <TONECOUNT>7</TONECOUNT>	<TONES>1,2,2,2,2,1,2</TONES>		</SEQUENCEINFO>
	<SEQUENCEINFO type="SCA">	<TAG>DOR_X4</TAG>	        <TONECOUNT>7</TONECOUNT>	<TONES>2,1,3,1,2,1,2</TONES>		</SEQUENCEINFO>
	<SEQUENCEINFO type="SCA">	<TAG>MIX_B9B13</TAG>		<TONECOUNT>7</TONECOUNT>	<TONES>1,3,1,2,1,2,2</TONES>		</SEQUENCEINFO>
	<SEQUENCEINFO type="SCA">	<TAG>LOCR_X6</TAG>       	<TONECOUNT>7</TONECOUNT>	<TONES>1,2,2,1,3,1,2</TONES>		</SEQUENCEINFO>
	<SEQUENCEINFO type="SCA">	<TAG>ION_X5</TAG>	        <TONECOUNT>7</TONECOUNT>	<TONES>2,2,1,3,1,2,1</TONES>		</SEQUENCEINFO>
	<SEQUENCEINFO type="SCA">	<TAG>LYD_X2</TAG>	        <TONECOUNT>7</TONECOUNT>	<TONES>3,1,2,1,2,2,1</TONES>		</SEQUENCEINFO>
	<SEQUENCEINFO type="SCA">	<TAG>ALT_B7</TAG>	        <TONECOUNT>7</TONECOUNT>	<TONES>1,2,1,2,2,1,3</TONES>		</SEQUENCEINFO>

	<!-- CHORD DATA -->
	<SEQUENCEINFO type="CHO">	<TAG>MAJ</TAG>		<TONECOUNT>3</TONECOUNT>	<TONES>0,4,7,  12,16</TONES>				</SEQUENCEINFO>
	<SEQUENCEINFO type="CHO">	<TAG>MIN</TAG>		<TONECOUNT>3</TONECOUNT>	<TONES>0,3,7,  12,15</TONES>				</SEQUENCEINFO>
	<SEQUENCEINFO type="CHO">	<TAG>AUG</TAG>		<TONECOUNT>3</TONECOUNT>	<TONES>0,4,8,  12,16</TONES>				</SEQUENCEINFO>
	<SEQUENCEINFO type="CHO">	<TAG>DIM</TAG>		<TONECOUNT>3</TONECOUNT>	<TONES>0,3,6,  12,15</TONES>				</SEQUENCEINFO>
	<SEQUENCEINFO type="CHO">	<TAG>SUS2</TAG>		<TONECOUNT>3</TONECOUNT>	<TONES>0,2,7,  12,14</TONES>				</SEQUENCEINFO>
	<SEQUENCEINFO type="CHO">	<TAG>SUS4</TAG>		<TONECOUNT>3</TONECOUNT>	<TONES>0,5,7,  12,17</TONES>				</SEQUENCEINFO>
	<SEQUENCEINFO type="CHO">	<TAG>7</TAG>		<TONECOUNT>4</TONECOUNT>	<TONES>0,4,7,10,  12,16,19</TONES>			</SEQUENCEINFO>
	<SEQUENCEINFO type="CHO">	<TAG>MAJ7</TAG>		<TONECOUNT>4</TONECOUNT>	<TONES>0,4,7,11,  12,16,19</TONES>			</SEQUENCEINFO>
	<SEQUENCEINFO type="CHO">	<TAG>M7</TAG>		<TONECOUNT>4</TONECOUNT>	<TONES>0,3,7,10,  12,15,19</TONES>			</SEQUENCEINFO>
	<SEQUENCEINFO type="CHO">	<TAG>M7B5</TAG>		<TONECOUNT>4</TONECOUNT>	<TONES>0,3,6,10,  12,15,18</TONES>			</SEQUENCEINFO>
	<SEQUENCEINFO type="CHO">	<TAG>DIM7</TAG>		<TONECOUNT>4</TONECOUNT>	<TONES>0,3,6,9,   12,15,18</TONES>			</SEQUENCEINFO>
	<SEQUENCEINFO type="CHO">	<TAG>7B5</TAG>		<TONECOUNT>4</TONECOUNT>	<TONES>0,4,6,10,  12,16,18</TONES>			</SEQUENCEINFO>
	<SEQUENCEINFO type="CHO">	<TAG>7X5</TAG>		<TONECOUNT>4</TONECOUNT>	<TONES>0,4,8,10,  12,16,20</TONES>			</SEQUENCEINFO>
	<SEQUENCEINFO type="CHO">	<TAG>MMAJ7</TAG>	<TONECOUNT>4</TONECOUNT>	<TONES>0,3,7,11,  12,15,19</TONES>			</SEQUENCEINFO>
	<SEQUENCEINFO type="CHO">	<TAG>SUS47</TAG>	<TONECOUNT>4</TONECOUNT>	<TONES>0,5,7,10,  12,17,19</TONES>			</SEQUENCEINFO>
	<SEQUENCEINFO type="CHO">	<TAG>6</TAG>		<TONECOUNT>4</TONECOUNT>	<TONES>0,4,7,9,   12,16,19</TONES>			</SEQUENCEINFO>
	<SEQUENCEINFO type="CHO">	<TAG>M6</TAG>		<TONECOUNT>4</TONECOUNT>	<TONES>0,3,7,9,   12,15,19</TONES>			</SEQUENCEINFO>
	<SEQUENCEINFO type="CHO">	<TAG>MAJ9</TAG>		<TONECOUNT>5</TONECOUNT>	<TONES>0,4,7,11,14</TONES>					</SEQUENCEINFO>
	<SEQUENCEINFO type="CHO">	<TAG>7B9</TAG>		<TONECOUNT>5</TONECOUNT>	<TONES>0,4,7,10,13</TONES>					</SEQUENCEINFO>
	<SEQUENCEINFO type="CHO">	<TAG>9</TAG>		<TONECOUNT>5</TONECOUNT>	<TONES>0,4,7,10,14</TONES>					</SEQUENCEINFO>
	<SEQUENCEINFO type="CHO">	<TAG>7X9</TAG>		<TONECOUNT>5</TONECOUNT>	<TONES>0,4,7,10,15</TONES>					</SEQUENCEINFO>
	<SEQUENCEINFO type="CHO">	<TAG>M9</TAG>		<TONECOUNT>5</TONECOUNT>	<TONES>0,3,7,10,14</TONES>					</SEQUENCEINFO>
