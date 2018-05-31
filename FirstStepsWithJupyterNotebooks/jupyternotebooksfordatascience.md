# First Steps With Jupyter Notebooks For Data Science
## 1. Import Data
### 1.1. Import Modules
The first thing to do when starting a new Jupyter Notebook is to import the modules needed to get your data and perform the analysis.
In this case, the modules imported are Pandas, MatPlotLib and Seaborn.

~~~~
import seaborn as sns
import pandas as pd
import matplotlib.pyplot as plt
%matplotlib inline
~~~~
Sometimes, Jupyter Notebooks have a display requirement. So in order to visualize the graphs inline in the Jupyter Notebook, we will use this magic function: `%matplotlib inline`

### 1.2. Read Data Files

Once the modules have been imported, it is time to import data. Pandas can read lots of file types which are shown below.

- Reading .csv files

~~~~
df = pd.read_csv('my_dataset.csv', sep=',')
~~~~

- Reading excel files

~~~~
xls_df = pd.read_excel('my_dataset.xls', 'Sheet1')
~~~~

- Reading .json files

~~~~
json_df = pd.read_json('my_dataset.json', orient='columns')
~~~~

- Reading .html files

~~~~
html_df = pd.read_html('https://page.com/with/table.html') [0]
~~~~

- Reading from SQL tables

~~~~
import urllib
params = urllib.parse.quote_plus("DRIVER={SQL Server Native Client 10.0};SERVER=dagger;DATABASE=test;UID=user;PWD=password")
~~~~
~~~~
from sqlalchemy import create_engine
engine = create_engine('mssql+pyodbc://user:password@server/database')
sql_df = pd.read_sql_table('my_table', engine)
~~~~

##### For further reading:
-  [Read csv](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.read_csv.html)
- [Read excel](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.read_excel.html#pandas.read_excel)
- [Read json](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.read_json.html#pandas.read_json)
- [Read html](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.read_html.html#pandas.read_html)
- [Read SQL](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.read_sql.html#pandas.read_sql)

## 2. Know & Clean your Data
### 2.1. Know your Data
Once we got our dataframe, it is time to get a quick peek at this data by selecting its top or few rows as shown below.

~~~~
import pandas as pd
pokemon_df = pd.read_csv('pokemon/Pokemon.csv')
pokemon_df.head(13)
~~~~
![pokemon_head](img/head.png)

When loading a dataframe, it is always a good idea to see what data type Pandas has assigned each column, with `.dtypes`

~~~~
pokemon_df.dtypes
~~~~

![pokemon_dtypes](img/dtypes.png)

### 2.2. Clean your Data

When working with large datasets, it is very common to read-in datasets and there are missing data, Pandas will automatically fill-in those missing points with a `NaN` or `Null` value.

Pandas provides with a few basic methods for mitigating missing data:

- Replace it with a scalar value
~~~~
df.fillna(df.mean())    # Fill with the mean value
df.fillna(0)            # Fill whith a 0
~~~~

- Replace it with the immediate, previous, non-NaN value
~~~~
df.fillna(method='ffill')   # Fill the values forward
df.fillna(method='bfill')   # Fill the values in reverse
~~~~

- Dropping data

It is always better first try to fill in missing data rather than deleting it. But if everything else fails trying to rectifying nans, it is possible to remove the sample or column completely, so that it no longer negatively impacts the analysis. This is a last resort.

~~~~
df = df.dropna(axis=0)    # Remove any row with nans
df = df.dropna(axis=1)    # Remove any column with nans
~~~~

## 3. Choose the right Chart for your Data

A statistical graph is a visual representation of a series of statistical data. It is a very effective tool, since a good graphic:
- Captures the reader's attention
- Presents the information in am simple, clear and precise way
- Does not lead to error
- Facilitates data comparison and highlights trends and differences
- Illustrates the message, theme or plot of the accompanying text

Visualizations foster understanding. They weave data points together to tell stories, and people take action based on what they understand from those stories. So visualizations need to be clear and accurate, giving decision-makers confidence in their choices.

First, let's start by defining the types of data that exist and then we will see how they can be represented through the graphs.

### 3.1. Data types: Qualitative, Quantitative and Temporal
Figuring out whether the data is qualitative, quantitative, or temporal will help determine which visualization works best.

- Qualitative: they refer to qualities or modalities that can not be expressed numerically.
They may be:
  - Ordinals: if they follow an order or sequence (eg the alphabet, the months of the year).
  - Categorical: if they do not follow any order (eg the marital status of the people: singles, married, widowed, divorced and separated).

  These data types are often stored in **string fields**.

- Quantitative: they refer to quantities or numerical values. They may be:
  - Discrete: if they take integer values (0, 1, 2, 3 ...). Eg the number of children, the number of students in a class ...
  - Continuous: if they can take any value within a range (eg height or weight of people).


- Temporal data is collected over time. For example, it can show the number of lightning strikes that occur during a storm or car counts from traffic sensors. These data types are often stored in date/time fields.

### 3.2. Bar Graphs
A bar graph is a graphical representation on a Cartesian axis of the frequencies of a qualitative or discrete variable. It makes it easy to identify broad differences between groups at a glance.

In one of the axes, the different categories or modalities of the qualitative or discrete variable are positioned and in the other, the value or frequency of each category in a certain scale.

Bar Graphs are usually used for comparing magnitudes of different categories or watching the evolution in time of one magnitude.

Using Seaborn, a bar graph can be seen as shown below:
~~~~
import seaborn as sns
import pandas as pd
import matplotlib.pyplot as plt
%matplotlib inline

sns.set_style('whitegrid')
example_one = sns.barplot(x='year', y='major_death', data = df)
~~~~

![barPlot](img/barPlot.png)

### 3.3. Pie Charts

A pie chart is a circular representation of the relative frequencies of a qualitative or discrete variable that allows, in a simple and fast way, its comparison.

Pie charts subdivide categorical data into unique values, with the size of each piece representing the magnitude of a numeric variable for each category, such as count.

The circle represents the totality that we want to observe and each portion, called sectors, represent the proportion of each category of the variable with respect to the total. It is usually expressed in percentages.

They are useful when the categories are few. If the graph had many variables, it would not provide almost information and it would be practically incomprehensible, as in the following example:

![badExample](img/badExample.png)

Using MatPlotLib, you can make a Pie Chart as shown below:
~~~~
import matplotlib.pyplot as plt

# Data to plot
labels = 'Python', 'C++', 'Ruby', 'Java'
sizes = [215, 130, 245, 210]
colors = ['gold', 'yellowgreen', 'lightcoral', 'lightskyblue']
explode = (0.1, 0, 0, 0)  # explode 1st slice

# Plot
plt.pie(sizes, explode=explode, labels=labels, colors=colors,
        autopct='%1.1f%%', shadow=True, startangle=140)

plt.axis('equal')
plt.show()
~~~~

![pieChart](img/pieChart.png)

### 3.4. Scatter plot
A scatter plot shows on a Cartesian axis the relationship between two variables. This graph informs us of the degree of correlation between the two variables, that is, it shows us whether the increase or decrease in the values of one of the variables, called the independent variable and which is usually represented on the horizontal axis, alters in some way the values of the other, called dependent variable and that usually represents on the vertical axis.

Scatterplots enable viewers to look at the relationship between two numeric values with both axes showing quantitative variables. The level of correlation among values can also be quantified, making it easy to identify causation.

Using Seaborn, it is easy to make a scatter plot and analyze if there is any relationship between the variables, like a linear regression.

~~~~
sns.lmplot(x='Attack', y='HP', data=pokemon_df)
~~~~

![regression](img/linearRegression.png)

### 3.5. Density and Heat Maps
Density maps, or heat maps, calculate spatial concentrations of events or values. With these, viewers can visualize the distribution of variables as a continuous surface.

#### 3.5.1. Density Map

~~~~
import numpy as np

sns.set(style='white')

random_state = np.random.RandomState(10)

mean = [2,2]
cov = [(1, .5), (.5, 1)]

x1, x2 = random_state.multivariate_normal(mean, cov, 500).T

x1 = pd.Series(x1, name='Example_X')
x2 = pd.Series(x2, name='Example_Y')

example_three = sns.jointplot(x1, x2, kind='kde', size=7, space=0)
~~~~

![densityMap](img/density.png)

#### 3.5.2. Heatmap

~~~~
example_four = sns.load_dataset('flights')
example_four = example_four.pivot('month', 'year', 'passengers')
display_four = sns.heatmap(example_four)
~~~~

![heatmap](img/heatmap.png)

*For further reading about how to represent data in Python:*
<https://datavizcatalogue.com/>
