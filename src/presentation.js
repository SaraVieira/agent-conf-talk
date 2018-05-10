// Import React
import React from 'react';

// Import Spectacle Core tags
import {
    BlockQuote,
    Cite,
    Deck,
    Heading,
    ListItem,
    List,
    Quote,
    Slide,
    Text,
    Layout,
    Fit,
    Image,
    Appear,
    Code
} from 'spectacle';

import images from './images';
import theme, { colors } from './theme';

const listStyle = { marginBottom: 20, fontWeight: 'bold' };

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck theme={theme} progress="bar">
                <Slide bgColor="secondary">
                    <Heading
                        size={1}
                        fit
                        caps
                        lineHeight={1}
                        textColor="primary"
                    >
                        Hello
                    </Heading>
                    <Heading size={1} textColor="primary">
                        <span role="img" aria-label="Hello">
                            👋
                        </span>
                    </Heading>
                </Slide>
                <Slide
                    bgColor="secondary"
                    notes="So, my name is Sara and I am FE developer for YLD, a react and node consultancy that works out of london and lisbon.I'm always on twitter and you should follow me there if you like this sort of weird humor and rants."
                >
                    <Layout
                        style={{
                            minWidth: 500,
                            justifyContent: 'space-between'
                        }}
                    >
                        <Fit>
                            <List
                                style={{
                                    padding: 0,
                                    listStyle: 'none',
                                    margin: 0,
                                    minWidth: 500
                                }}
                            >
                                <ListItem textColor="primary">
                                    Sara Vieira
                                </ListItem>
                                <ListItem textColor="primary">
                                    Full Stack Developer
                                </ListItem>
                                <ListItem textColor="primary">
                                    @NikkitaFTW
                                </ListItem>
                                <ListItem
                                    textColor="primary"
                                    style={{ display: 'flex', marginTop: 20 }}
                                >
                                    <Image
                                        src={images.soccer}
                                        style={{
                                            width: 50,
                                            height: 50,
                                            margin: 0
                                        }}
                                    />
                                    <Text
                                        textColor="primary"
                                        style={{ margin: 0 }}
                                    >
                                        Football{' '}
                                    </Text>
                                </ListItem>
                                <ListItem
                                    textColor="primary"
                                    style={{ display: 'flex', marginTop: 20 }}
                                >
                                    <Image
                                        src={images.zombie}
                                        style={{
                                            width: 50,
                                            height: 50,
                                            margin: 0
                                        }}
                                    />
                                    <Text
                                        textColor="primary"
                                        style={{ margin: 0 }}
                                    >
                                        Horror Movies
                                    </Text>
                                </ListItem>
                                <ListItem
                                    textColor="primary"
                                    style={{ display: 'flex' }}
                                >
                                    <Image src={images.train} />
                                </ListItem>
                            </List>
                        </Fit>
                        <Fit>
                            <Image
                                style={{
                                    width: 350,
                                    maxWidth: 'inherit',
                                    top: '50%',
                                    position: 'relative',
                                    transform: 'translateY(-50%)'
                                }}
                                src={images.YLDLogo}
                            />
                        </Fit>
                    </Layout>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading
                        size={1}
                        fit
                        caps
                        lineHeight={1}
                        textColor="primary"
                    >
                        But my talk is not about development
                    </Heading>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading
                        size={1}
                        fit
                        caps
                        lineHeight={1}
                        textColor="primary"
                    >
                        My talk is actually a very serious topic
                    </Heading>
                    <Image
                        style={{
                            marginTop: 30
                        }}
                        src="https://media.giphy.com/media/xT9KVmAfUlFLGoE0A8/giphy.gif"
                    />
                </Slide>
                <Slide bgColor="secondary">
                    <Heading
                        size={1}
                        fit
                        caps
                        lineHeight={1}
                        textColor="primary"
                    >
                        Let's talk about mental health
                    </Heading>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={2} caps lineHeight={1.2} textColor="primary">
                        Your Brain does not a have a fix flag
                    </Heading>
                    <Heading
                        size={6}
                        caps
                        lineHeight={1.2}
                        textColor="tertiary"
                    >
                        Because of eslint get it ?
                        <span role="img" aria-label="Facepalm">
                            🤦‍
                        </span>
                    </Heading>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading
                        size={2}
                        caps
                        lineHeight={1.6}
                        textColor="tertiary"
                    >
                        disclaimer:
                    </Heading>
                    <Heading size={4} caps lineHeight={1} textColor="primary">
                        This is my experience, yours may be different
                    </Heading>
                </Slide>
                <Slide bgColor="tertiary">
                    <BlockQuote>
                        <Quote style={{ color: '#100830' }}>
                            Nobody realizes that some people expend tremendous
                            energy merely to be normal.
                        </Quote>
                        <Cite style={{ color: '#fff' }}>Albert Camus</Cite>
                    </BlockQuote>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading
                        size={1}
                        fit
                        caps
                        lineHeight={1}
                        textColor="primary"
                    >
                        Why are YOU talking about this ?
                    </Heading>
                </Slide>
                <Slide bgColor="primary">
                    <Heading
                        size={1}
                        fit
                        caps
                        lineHeight={1}
                        textColor="secondary"
                    >
                        okay... but why you ?
                    </Heading>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading
                        size={1}
                        fit
                        caps
                        lineHeight={1}
                        textColor="primary"
                    >
                        I have a couple of mental problems
                    </Heading>
                    <List
                        style={{
                            padding: 0,
                            listStyle: 'none',
                            margin: 0,
                            minWidth: 500,
                            marginTop: 50
                        }}
                    >
                        <ListItem style={listStyle} textColor="primary">
                            Panic Disorder
                        </ListItem>
                        <ListItem style={listStyle} textColor="primary">
                            People Fobia
                        </ListItem>
                        <ListItem style={listStyle} textColor="primary">
                            Intermittent Depression
                        </ListItem>
                    </List>
                </Slide>
                <Slide bgColor="primary">
                    <Heading size={3} lineHeight={1} textColor="secondary">
                        To some of you that know me this may be a surprise
                    </Heading>
                </Slide>
                <Slide bgColor="primary">
                    <Heading
                        size={3}
                        fit
                        caps
                        lineHeight={1}
                        textColor="secondary"
                    >
                        Proving my point:
                    </Heading>
                    <Heading
                        size={3}
                        fit
                        caps
                        lineHeight={1}
                        textColor="tertiary"
                    >
                        Mental Health does not have a face
                    </Heading>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={1} caps lineHeight={1} textColor="primary">
                        But what is a Panic Disorder ?
                    </Heading>
                </Slide>
                <Slide bgColor="tertiary">
                    <BlockQuote>
                        <Quote style={{ color: '#100830', fontSize: 60 }}>
                            Panic disorder is diagnosed in people who experience
                            spontaneous seemingly out-of-the-blue panic attacks
                            and are very preoccupied with the fear of a
                            recurring attack.
                        </Quote>
                        <Cite style={{ color: '#fff' }}>The Internet</Cite>
                    </BlockQuote>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading
                        size={1}
                        fit
                        caps
                        lineHeight={1}
                        textColor="primary"
                    >
                        okay... but what is a panic attack ?
                    </Heading>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={4} caps lineHeight={1} textColor="primary">
                        Have you ever felt tremendous fear for no reason ?
                    </Heading>
                </Slide>
                <Slide bgColor="secondary">
                    <List
                        style={{
                            padding: 0,
                            listStyle: 'none',
                            margin: 0,
                            minWidth: 500,
                            marginTop: 50
                        }}
                    >
                        <ListItem
                            textColor="primary"
                            fontSize={20}
                            style={listStyle}
                        >
                            Pounding or fast heartbeat
                        </ListItem>
                        <ListItem
                            textColor="primary"
                            fontSize={20}
                            style={listStyle}
                        >
                            Trembling or shaking
                        </ListItem>
                        <ListItem
                            textColor="primary"
                            fontSize={20}
                            style={listStyle}
                        >
                            Shortness of breath and chest pain
                        </ListItem>
                        <ListItem
                            textColor="primary"
                            fontSize={20}
                            style={listStyle}
                        >
                            Feeling dizzy or faint
                        </ListItem>
                        <ListItem
                            textColor="primary"
                            fontSize={20}
                            style={listStyle}
                        >
                            Stomach pains
                        </ListItem>
                        <ListItem
                            textColor="primary"
                            fontSize={20}
                            style={listStyle}
                        >
                            Feeling unreal or detached
                        </ListItem>
                        <ListItem
                            textColor="primary"
                            fontSize={20}
                            style={listStyle}
                        >
                            A fear of losing control or going crazy
                        </ListItem>
                    </List>
                </Slide>
                <Slide bgColor="primary">
                    <Heading size={1} caps lineHeight={1} textColor="tertiary">
                        A fear of dying
                    </Heading>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading
                        size={1}
                        caps
                        fit
                        lineHeight={1}
                        textColor="primary"
                    >
                        Sounds horrible right ?
                    </Heading>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading
                        size={1}
                        caps
                        fit
                        lineHeight={1}
                        textColor="primary"
                    >
                        I lived like this for 5 years
                    </Heading>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={2} lineHeight={1} textColor="primary">
                        Why the fuck ? Are you dumb or something ?
                    </Heading>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={3} caps lineHeight={1} textColor="tertiary">
                        I felt alone !
                    </Heading>
                    <Heading size={3} lineHeight={1} textColor="primary">
                        I felt like what I was experiencing didn't make sense
                    </Heading>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={3} lineHeight={1} textColor="primary">
                        Well, all I felt was fear, of everything
                    </Heading>
                    <Appear>
                        <Heading size={3} lineHeight={1} textColor="tertiary">
                            Doesn't make any sense, right ?
                        </Heading>
                    </Appear>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={3} lineHeight={1} textColor="tertiary">
                        My main issue with mental issues is this:
                    </Heading>
                    <Appear>
                        <Heading size={3} lineHeight={1} textColor="primary">
                            If you live with it for an amount of time you don't
                            see a way out
                        </Heading>
                    </Appear>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={3} caps lineHeight={1} textColor="tertiary">
                        You just think it's your life now
                    </Heading>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={3} lineHeight={1} textColor="primary">
                        You are just different and have more limitations than
                        others, and thats fine right ?
                    </Heading>
                </Slide>
                <Slide bgColor="primary">
                    <Heading size={1} caps lineHeight={1} textColor="secondary">
                        Fuck no !
                    </Heading>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={6} lineHeight={1} textColor="primary">
                        I was 19 and I looked like this the last time I remember
                        feeling normal
                    </Heading>
                    <Image src={require('./assets/me.jpg')} />
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={6} lineHeight={1} textColor="primary">
                        Just for funsies here is my license photo:
                    </Heading>
                    <Image height="500" src={require('./assets/license.jpg')} />
                </Slide>
                <Slide bgColor="primary">
                    <Heading
                        size={1}
                        caps
                        fit
                        lineHeight={1}
                        textColor="secondary"
                    >
                        I'm not the same person
                    </Heading>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading
                        size={1}
                        caps
                        fit
                        lineHeight={1}
                        textColor="primary"
                    >
                        I wasn't even funny back then
                    </Heading>
                </Slide>
                <Slide
                    bgColor="secondary"
                    notes="so that people wouldn't realize how fucked up I really was"
                >
                    <Heading
                        size={2}
                        caps
                        fit
                        lineHeight={1}
                        textColor="primary"
                    >
                        I became funny
                    </Heading>
                    <Appear>
                        <Heading size={2} lineHeight={1} textColor="tertiary">
                            People have different defense mechanisms
                        </Heading>
                    </Appear>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={1} caps lineHeight={1} textColor="primary">
                        My story
                    </Heading>
                    <Text textColor="tertiary">
                        <span role="img" aria-label="Drumroll">
                            🥁
                        </span>{' '}
                        Drumroll{' '}
                        <span role="img" aria-label="Drumroll">
                            🥁
                        </span>
                    </Text>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={3} lineHeight={1} textColor="primary">
                        At first I didn't leave the house
                    </Heading>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={3} lineHeight={1} textColor="primary">
                        Then I tried to fix it by myself
                    </Heading>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={3} lineHeight={1} textColor="primary">
                        Thinking that things will go away doesn't make them go
                        away
                    </Heading>
                    <Appear>
                        <Text textColor="tertiary">
                            I have had three cars that prove this
                        </Text>
                    </Appear>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={3} lineHeight={1} textColor="primary">
                        After about a year I started talking to my family and
                        friends
                    </Heading>
                    <Appear>
                        <Text textColor="tertiary">
                            Finally a smart move ah ?
                        </Text>
                    </Appear>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={3} lineHeight={1} textColor="primary">
                        Things got better , I started leaving the house and
                        having a more normal life
                    </Heading>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={3} lineHeight={1} textColor="primary">
                        It was still there and I had terrible days but that was
                        my life I guess
                    </Heading>
                    <Appear>
                        <Text caps textColor="tertiary">
                            WRONG SARA!!
                        </Text>
                    </Appear>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={3} lineHeight={1.2} textColor="primary">
                        About three years in I changed companies and became more
                        active in the dev community
                    </Heading>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={3} caps lineHeight={1.5} textColor="primary">
                        This was good and bad
                    </Heading>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={3} lineHeight={1} textColor="primary">
                        I started getting better at my job
                    </Heading>
                    <Image src={images.job} />
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={3} lineHeight={1} textColor="primary">
                        I started getting more responsibilities
                    </Heading>
                    <Image src={images.resp} />
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={3} lineHeight={1} textColor="primary">
                        I started being the person that deployed things to
                        production
                    </Heading>
                    <Code textColor="tertiary" style={{ display: 'block' }}>
                        ~ git commit -n
                    </Code>
                    <Code textColor="tertiary">
                        ~ git push origin master -f
                    </Code>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={3} lineHeight={1} textColor="primary">
                        I started staying at work until 8PM on a daily basis
                    </Heading>
                    <Image src={images.nosleep} />
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={3} lineHeight={1} textColor="primary">
                        I started feeling way more pressure than my brain could
                        handle
                    </Heading>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={3} lineHeight={1} textColor="primary">
                        I started breaking down hard
                    </Heading>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={3} lineHeight={1} textColor="primary">
                        By this point I had panic attacks everyday
                    </Heading>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={3} lineHeight={1} textColor="primary">
                        I would go to the office 3 days a week
                    </Heading>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={3} lineHeight={1} textColor="primary">
                        I would hide in the bathroom for huge amounts of time
                        just so I could get away
                    </Heading>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={3} lineHeight={1} textColor="primary">
                        I moved back with my mother
                    </Heading>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={4} lineHeight={1.1} textColor="primary">
                        Eventually I had a huge panic attack and fainted at work
                        and that's when everyone knew something was wrong
                    </Heading>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={4} lineHeight={1.1} textColor="primary">
                        Next day I couldn't get out of bed
                    </Heading>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={3} lineHeight={1.1} textColor="primary">
                        My body would not do anything, I felt super weak
                    </Heading>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={3} lineHeight={1.1} textColor="primary">
                        Thinking this would go away I waited two days
                    </Heading>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={2} caps lineHeight={1.1} textColor="primary">
                        It got way worse
                    </Heading>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={3} lineHeight={1.1} textColor="primary">
                        I remember my mom told me to go to the psychiatrist
                    </Heading>
                    <Appear>
                        <Text textColor="tertiary">
                            I wanted to go the emergency room
                        </Text>
                    </Appear>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={5} lineHeight={1.1} textColor="primary">
                        This couldn't be mental
                    </Heading>
                    <Heading size={5} lineHeight={1.1} textColor="primary">
                        This was physical
                    </Heading>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading
                        size={2}
                        caps
                        lineHeight={1.1}
                        textColor="tertiary"
                    >
                        News Flash:
                    </Heading>
                    <Heading size={3} lineHeight={1.1} textColor="primary">
                        Mental problems can demonstrate in physical ways
                    </Heading>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={2} lineHeight={1.1} textColor="primary">
                        I eventually went to the psychiatrist
                    </Heading>
                    <Appear>
                        <Text textColor="tertiary">
                            She said we could go the emergency room afterwards
                        </Text>
                    </Appear>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={3} lineHeight={1.1} textColor="primary">
                        I told him what was wrong with me
                    </Heading>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={3} lineHeight={1.1} textColor="primary">
                        He promptly said I had a panic disorder
                    </Heading>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={3} lineHeight={1.5} textColor="primary">
                        Ever had a{' '}
                        <span style={{ color: colors.tertiary }}>"OH"</span>{' '}
                        moment?
                    </Heading>
                    <Heading size={3} lineHeight={1.5} textColor="primary">
                        This was a huge one
                    </Heading>
                    <Appear>
                        <Text textColor="tertiary">
                            It explained most of my life
                        </Text>
                    </Appear>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={3} lineHeight={1.5} textColor="primary">
                        He said I should have gone earlier and now only
                        medication could help me
                    </Heading>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={5} lineHeight={1.5} textColor="primary">
                        I haven't skipped one single med
                    </Heading>
                    <Appear>
                        <Text textColor="tertiary">
                            I am the person that can have a cold for weeks and
                            does not take anything
                        </Text>
                    </Appear>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={3} caps lineHeight={1.1} textColor="primary">
                        So what did I learn ?
                    </Heading>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={3} lineHeight={1.1} textColor="primary">
                        Mental Health is hard man
                    </Heading>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={3} lineHeight={1.1} textColor="primary">
                        It's also as important as physical one
                    </Heading>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={3} lineHeight={1.1} textColor="primary">
                        The only way to help yourself is to walk on the broken
                        leg
                    </Heading>
                    <Appear>
                        <Text textColor="tertiary">
                            Do things that scare you
                        </Text>
                    </Appear>
                    <Appear>
                        <Text textColor="tertiary">
                            Leave your comfort zone
                        </Text>
                    </Appear>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={3} lineHeight={1.1} textColor="primary">
                        The trend of #JuniorForLife is bad
                    </Heading>
                    <Appear>
                        <Text textColor="tertiary">
                            By saying this we are perpetuating our problems.
                        </Text>
                    </Appear>
                    <Appear>
                        <Text textColor="tertiary">
                            We are continuing our imposter syndrome
                        </Text>
                    </Appear>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={3} lineHeight={1.1} textColor="primary">
                        Also if the people in this room are juniors ...
                    </Heading>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading
                        size={1}
                        caps
                        lineHeight={1.1}
                        textColor="tertiary"
                    >
                        WTF am I ?
                    </Heading>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={3} lineHeight={1.1} textColor="primary">
                        So you are better?
                    </Heading>
                    <Heading size={3} lineHeight={1.1} textColor="primary">
                        What changed in your life?
                    </Heading>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={5} caps lineHeight={1.5} textColor="primary">
                        I moved jobs
                    </Heading>
                    <img alt="new job" src={images.newJob} />
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={5} caps lineHeight={1.5} textColor="primary">
                        And city
                    </Heading>
                    <img alt="lisbon" src={images.lisbon} />
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={5} caps lineHeight={1.5} textColor="primary">
                        I lived in London for 3 months
                    </Heading>
                    <img alt="things" src={images.london} />
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={5} caps lineHeight={1.5} textColor="primary">
                        I bought a motorcycle
                    </Heading>
                    <img alt="things" src={images.moto} />
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={5} caps lineHeight={1.5} textColor="primary">
                        I Lost 20KG
                    </Heading>
                    <img alt="things" src={images.weight} height={500} />
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={5} caps lineHeight={1.5} textColor="primary">
                        I Spoke in Conferences
                    </Heading>
                    <img alt="things" src={images.talk} height={500} />
                </Slide>
                <Slide bgColor="secondary">
                    <Heading
                        size={5}
                        caps
                        style={{ position: 'relative', zIndex: 2 }}
                        lineHeight={1.5}
                        textColor="primary"
                    >
                        I met amazing people
                    </Heading>
                    <img
                        alt="things"
                        src={images.people[0]}
                        height={500}
                        style={{
                            position: 'absolute',
                            zIndex: 1,
                            top: '-150%'
                        }}
                    />
                    <img
                        alt="things"
                        src={images.people[1]}
                        height={500}
                        style={{
                            position: 'absolute',
                            zIndex: 1,
                            top: '70px',
                            left: '-18%'
                        }}
                    />
                    <img
                        alt="things"
                        src={images.people[2]}
                        height={500}
                        style={{ position: 'absolute', zIndex: 1, top: 80 }}
                    />
                    <img
                        alt="things"
                        src={images.people[3]}
                        height={500}
                        style={{
                            position: 'absolute',
                            zIndex: 0,
                            top: '-300px',
                            left: '-190px'
                        }}
                    />
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={5} caps lineHeight={1.5} textColor="primary">
                        I started contributing to open source
                    </Heading>
                    <img alt="things" src={images.oss} height={500} />
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={5} caps lineHeight={1.5} textColor="primary">
                        I started liking football again
                    </Heading>
                    <img alt="things" src={images.slb} height={500} />
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={5} caps lineHeight={1.5} textColor="primary">
                        I traveled alone
                    </Heading>
                    <img alt="things" src={images.alone} height={500} />
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={5} caps lineHeight={1.5} textColor="primary">
                        I got stuck in Frankfurt of 13 hours with just Kickass
                    </Heading>
                    <img alt="things" src={images.hello} height={500} />
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={5} caps lineHeight={1.5} textColor="primary">
                        And had a blast
                    </Heading>
                    <img alt="things" src={images.coffee} height={500} />
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={5} caps lineHeight={1.5} textColor="primary">
                        And had a blast
                    </Heading>
                    <img alt="things" src={images.eat} height={500} />
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={5} caps lineHeight={1.5} textColor="primary">
                        And had a blast
                    </Heading>
                    <img alt="things" src={images.tour1} height={500} />
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={5} caps lineHeight={1.5} textColor="primary">
                        And had a blast
                    </Heading>
                    <img alt="things" src={images.tour2} height={500} />
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={5} caps lineHeight={1.5} textColor="primary">
                        And had a blast
                    </Heading>
                    <img alt="things" src={images.deep} height={500} />
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={5} caps lineHeight={1.5} textColor="primary">
                        I helped organize a conference
                    </Heading>
                    <img alt="things" src={images.reactFest} height={500} />
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={5} caps lineHeight={1.5} textColor="primary">
                        And most important:
                    </Heading>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={2} caps lineHeight={1.5} textColor="primary">
                        I'm not scared anymore
                    </Heading>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={5} caps lineHeight={1.5} textColor="primary">
                        Please speak to people
                    </Heading>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={5} caps lineHeight={1.5} textColor="primary">
                        Please get help
                    </Heading>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={5} caps lineHeight={1.5} textColor="primary">
                        There is a way out
                    </Heading>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={5} caps lineHeight={1.5} textColor="primary">
                        MY DM on twitter is always open, talk to me
                    </Heading>
                    <Appear>
                        <Text textColor="tertiary">@NikkitaFTW</Text>
                    </Appear>
                </Slide>
                <Slide bgImage={require('./assets/bg.jpg')}>
                    <Heading size={1} caps bgSize={100} textColor="primary">
                        Thank you
                        <span role="img" aria-label="italy">
                            🇮🇹
                        </span>
                    </Heading>
                    <Code size={1} textColor="primary">
                        https://brain-fix.now.sh/
                    </Code>
                </Slide>
            </Deck>
        );
    }
}
