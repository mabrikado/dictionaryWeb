async function fetchWordData(word) {
	let final_data = {};

	try {
		const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
		const data = await response.json();

		const wordData = data[0];
		const partOfSpeeches = {};
		const examples = [];

		for (let i = 0; i < wordData.meanings.length; i++) {
			let pos = wordData.meanings[i].partOfSpeech;
			partOfSpeeches[pos] = wordData.meanings[i].definitions;

			wordData.meanings[i].definitions.forEach(def => {
				if (def.example) {
					examples.push(def.example);
				}
			});
		}

		const partOfSpeechesArray = Object.entries(partOfSpeeches).map(([partOfSpeech, definitions]) => ({
			partOfSpeech,
			definitions
		}));

		final_data = {
			word: wordData.word,
			phonetic: wordData.phonetic,
			partOfSpeeches: partOfSpeechesArray,
			examples: examples,
			audio: wordData.phonetics[1]?.audio || wordData.phonetics[0]?.audio || ''
		};
	} catch (error) {
		console.error("Error fetching word data:", error);
		final_data = { error: "Word could not be found" };
	}

	return final_data;
}


async function fetchAntonyms(word) {
	let antonyms = [];

	try {
		const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
		const data = await response.json();

		let new_antonyms = [];

		for (let i = 0; i < data[0].meanings.length; i++) {
			if (data[0].meanings[i].antonyms) {
				new_antonyms.push(...data[0].meanings[i].antonyms);
			}
		}

		antonyms = new_antonyms;
	} catch (error) {
		console.error("Error fetching antonyms:", error);
		antonyms = [];
	}

	return {
		word,
		antonyms
	};
}

async function fetchSynonyms(word) {
	let synonyms = [];

	try {
		const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
		const data = await response.json();

		let new_synonyms = [];

		for (let i = 0; i < data[0].meanings.length; i++) {
			if (data[0].meanings[i].synonyms) {
				new_synonyms.push(...data[0].meanings[i].synonyms);
			}
		}

		synonyms = new_synonyms;
	} catch (error) {
		console.error("Error fetching synonyms:", error);
		synonyms = [];
	}
	
	return {
		word,
		synonyms
	};
}



export { fetchWordData, fetchAntonyms , fetchSynonyms };
