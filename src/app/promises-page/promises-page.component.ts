import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

export interface Scripture {
  id: number;
  ref: string;
  verse: string;
  selected?: boolean;
}
export const scriptures: Scripture[] = [{
  id: 1,
  ref: "Zephaniah 3:17",
  verse: 'The LORD your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing."'
}, {
  id: 2,
  ref: "Revelation 21:4",
  verse: "And God will wipe away every tear from their eyes; there shall be no more death, nor sorrow, nor crying. There shall be no more pain, for the former things have passed away."
}, {
  id: 3,
  ref: "Psalms 91:7",
  verse: "A thousand may fall at your side, ten thousand at your right hand, but it will not come near you."
}, {
  id: 4,
  ref: "Psalms 91:4",
  verse: "He will cover you with his feathers, and under his wings you will find refuge; his faithfulness will be your shield and rampart."
}, {
  id: 5,
  ref: "Psalms 91:11",
  verse: "For he will command his angels concerning you to guard you in all your ways;"
}, {
  id: 6,
  ref: "Psalms 91:10",
  verse: "no harm will overtake you, no disaster will come near your tent."
}, {
  id: 7,
  ref: "Psalms 37:6",
  verse: "He will make your righteous reward shine like the dawn, your vindication like the noonday sun."
}, {
  id: 8,
  ref: "Psalms 37:4",
  verse: "Take delight in the LORD, and he will give you the desires of your heart."
}, {
  id: 9,
  ref: "Psalms 2:8",
  verse: "Ask me, and I will make the nations your inheritance, the ends of the earth your possession."
}, {
  id: 10,
  ref: "Psalms 121:7-8",
  verse: "The LORD will keep you from all harm - he will watch over your life; the LORD will watch over your coming and going both now and forevermore"
}, {
  id: 11,
  ref: "Psalm 84:11",
  verse: "For Jehovah God is our Light and our Protector. He gives us grace and glory. No good thing will He withhold from those who walk along his paths."
}, {
  id: 12,
  ref: "Proverbs 3:5-7",
  verse: "Trust in the Lord with all your heart, and lean not on your own understanding; in all your ways acknowledge Him, and He shall direct your paths. Do not be wise in your own eyes; fear the Lord and depart from evil."
}, {
  id: 13,
  ref: "Philippians 4:7",
  verse: "And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus."
}, {
  id: 14,
  ref: "Philippians 4:6",
  verse: "Be anxious for nothing, but in everything by prayer and supplication with thanksgiving let your requests be made known to God."
}, {
  id: 15,
  ref: "Philippians 4:19",
  verse: "And my God will meet all your needs according to the riches of his glory in Christ Jesus."
}, {
  id: 16,
  ref: "Malachi 4:2",
  verse: "But to you who fear My name The Sun of Righteousness shall arise With healing in His wings; and you shall go out and grow fat like stall-fed calves."
}, {
  id: 17,
  ref: "Luke 10:19",
  verse: "I have given you authority to trample on snakes and scorpions and to overcome all the power of the enemy; nothing will harm you."
}, {
  id: 18,
  ref: "Joshua 1:9",
  verse: "Be strong and of good courage; do not be afraid, nor be dismayed, for the Lord your God is with you wherever you go."
}, {
  id: 19,
  ref: "Joshua 1:5",
  verse: "No one will be able to stand against you all the days of your life. As I was with Moses, so I will be with you; I will never leave you nor forsake you."
}, {
  id: 20,
  ref: "John 14:27",
  verse: "Peace I leave with you, My peace I give to you; not as the world gives do I give to you. Let not your heart be troubled, neither let it be afraid."
}, {
  id: 21,
  ref: "John 14:27",
  verse: "Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid."
}, {
  id: 22,
  ref: "Jeremiah 30:17",
  verse: 'For I will restore health to you and heal you of your wounds," says the Lord.'
}, {
  id: 23,
  ref: "Jeremiah 29:11",
  verse: 'For I know the plans I have for you," declares the LORD, "plans to prosper you and not to harm you, plans to give you hope and a future'
}, {
  id: 24,
  ref: "James 1:5",
  verse: "If any of you lacks wisdom, let him ask of God, who gives to all liberally and without reproach, and it will be given to him."
}, {
  id: 25,
  ref: "Isaiah 62:3",
  verse: "You shall also be a crown of glory In the hand of the Lord, And a royal diadem In the hand of your God."
}, {
  id: 26,
  ref: "Isaiah 61:7",
  verse: "Instead of your shame you will receive a double portion, and instead of disgrace you will rejoice in your inheritance. And so you will inherit a double portion in your land, and everlasting joy will be yours."
}, {
  id: 27,
  ref: "Isaiah 61:6",
  verse: "And you will be called priests of the Lord, you will be named ministers of our God. You will feed on the wealth of nations, and in their riches you will boast."
}, {
  id: 28,
  ref: "Isaiah 60:5",
  verse: "Then you will look and be radiant, your heart will throb and swell with joy; the wealth on the seas will be brought to you, to you the riches of the nations will come."
}, {
  id: 29,
  ref: "Isaiah 60:4",
  verse: "Lift up your eyes and look about you: All assemble and come to you; your sons come from afar, and your daughters are carried on the hip."
}, {
  id: 30,
  ref: "Isaiah 60:19",
  verse: "The sun will no more be your light by day, or will the brightness of the moon shine on you, for the Lord will be your everlasting light, and your God will be your glory."
}, {
  id: 31,
  ref: "Isaiah 60:18",
  verse: "No longer will violence be heard in your land, nor ruin or destruction within your borders, but you will call your walls Salvation and your gates Praise."
}, {
  id: 32,
  ref: "Isaiah 60:14",
  verse: "The children of your oppressors will come bowing before you; all who despise you will bow down at your feet and will call you the City of the Lord, Zion of the Holy One of Israel."
}, {
  id: 33,
  ref: "Isaiah 60:11",
  verse: "Your gates will always stand open, they will never be shut, day or night, so that people may bring you the wealth of the nations - their kings led in triumphal procession."
}, {
  id: 34,
  ref: "Isaiah 60:1",
  verse: "Arise, shine, for your light has come, and the glory of the Lord rises upon you."
}, {
  id: 35,
  ref: "Isaiah 58:11",
  verse: "The LORD will guide you always; he will satisfy your needs in a sun-scorched land and will strengthen your frame. You will be like a well-watered garden, like a spring whose waters never fail."
}, {
  id: 36,
  ref: "Isaiah 54:17",
  verse: 'no weapon forged against you will prevail, and you will refute every tongue that accuses you. This is the heritage of the servants of the LORD, and this is their vindication from me," declares the LORD.'
}, {
  id: 37,
  ref: "Isaiah 54:15",
  verse: "If anyone does attack you, it will not be my doing; whoever attacks you will surrender to you."
}, {
  id: 38,
  ref: "Isaiah 54:14",
  verse: "In righteousness you will be established: Tyranny will be far from you;   you will have nothing to fear.Terror will be far removed; it will not come near you."
}, {
  id: 39,
  ref: "Isaiah 54:13",
  verse: "All your children will be taught by the Lord, and great will be their peace."
}, {
  id: 40,
  ref: "Isaiah 54:10",
  verse: 'For the mountains shall depart and the hills be removed, But My kindness shall not depart from you, nor shall My covenant of peace be removed," says the Lord, who has mercy on you.'
}, {
  id: 41,
  ref: "Isaiah 49:25",
  verse: "For I will contend with him who contends with you, and I will save your children."
}, {
  id: 42,
  ref: "Isaiah 45:3",
  verse: "I will give you hidden treasures, riches stored in secret places, so that you may know that I am the Lord, the God of Israel, who summons you by name."
}, {
  id: 43,
  ref: "Isaiah 45:2",
  verse: "I will go before you and will level the mountains; I will break down gates of bronze and cut through bars of iron."
}, {
  id: 44,
  ref: "Isaiah 43:2",
  verse: "When you pass through the waters, I will be with you; And through the rivers, they shall not overflow you. When you walk through the fire, you shall not be burned, Nor shall the flame scorch you"
}, {
  id: 45,
  ref: "Isaiah 41:13",
  verse: "For I am the LORD your God who takes hold of your right hand and says to you, Do not fear; I will help you."
}, {
  id: 46,
  ref: "Isaiah 41:10",
  verse: "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand."
}, {
  id: 47,
  ref: "Isaiah 26:3",
  verse: "You will keep him in perfect peace, whose mind is stayed on You, because he trusts in You."
}, {
  id: 48,
  ref: "Genesis 28:15",
  verse: "Behold, I am with you and will keep you wherever you go, and will bring you back to this land; for I will not leave you until I have done what I have spoken to you."
}, {
  id: 49,
  ref: "Genesis 17:6",
  verse: "I will make you very fruitful; I will make nations of you, and kings will come from you."
}, {
  id: 50,
  ref: "Genesis 12:3",
  verse: 'I will bless those who bless you, whoever curses you I will curse; and all peoples on earth will be blessed through you."'
}, {
  id: 51,
  ref: "Genesis 12:2",
  verse: "I will make you into a great nation, and I will bless you; I will make your name great, and you will be a blessing."
}, {
  id: 52,
  ref: "Exodus 14:14",
  verse: "The Lord will fight for you; you need only to be still."
}, {
  id: 53,
  ref: "Deuteronomy 31:6",
  verse: 'Be strong and courageous. Do not be afraid or terrified because of them, for the LORD your God goes with you; he will never leave you nor forsake you."'
}, {
  id: 54,
  ref: "Deuteronomy 28:8",
  verse: "The Lord will send a blessing on your barns and on everything you put your hand to. The Lord your God will bless you in the land he is giving you."
}, {
  id: 55,
  ref: "Deuteronomy 28:7",
  verse: "The Lord will grant that the enemies who rise up against you will be defeated before you. They will come at you from one direction but flee from you in seven."
}, {
  id: 56,
  ref: "Deuteronomy 28:13",
  verse: "The Lord will make you the head, not the tail. If you pay attention to the commands of the Lord your God that I give you this day and carefully follow them, you will always be at the top, never at the bottom."
}, {
  id: 57,
  ref: "Deuteronomy 28:12",
  verse: "The Lord will open to you His good treasure, the heavens, to give the rain to your land in its season, and to bless all the work of your hand. You shall lend to many nations, but you shall not borrow."
}, {
  id: 58,
  ref: "2 Timothy 4:18",
  verse: "The Lord will rescue me from every evil attack and will bring me safely to his heavenly kingdom. To him be glory for ever and ever. Amen"
}, {
  id: 59,
  ref: "2 Thessalonians 3:3",
  verse: "But the Lord is faithful, and he will strengthen and protect you from the evil one."
}];

@Component({
  selector: 'app-promises-page',
  templateUrl: './promises-page.component.html',
  styleUrls: ['./promises-page.component.scss']
})
export class PromisesPageComponent implements OnInit {
  title = 'promises';
  selectedScriptures: Scripture[] = [];
  promises: Scripture[] = [];

  constructor(private router: Router) {
    this.reshuffleScriptures();
  }

  get selectedRefs() {
    return this.selectedScriptures.flatMap(x => x.ref);
  }

  ngOnInit(): void {
  }

  addScripture(p: Scripture) {
    p.selected = true;
    this.selectedScriptures.push(p);
  }

  openScriptures() {
    const ids = this.selectedScriptures.map(x => x.id).join(',');
    this.clear();
    // const url = 'selected?ids=' + ids;
    // window.open(url, "_blank");
    this.router.navigate(['selected'], { queryParams: { ids } });
  }

  clear() {
    this.selectedScriptures = [];
    this.promises.forEach(x => {
      if (x.selected) {
        x.selected = false;
      }
    });
    this.reshuffleScriptures();
  }

  reshuffleScriptures() {
    this.promises = this.shuffleArray(scriptures);
  }

  shuffleArray(array: Scripture[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
}
